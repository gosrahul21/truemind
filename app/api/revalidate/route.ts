import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');
    
    // In production, use a secure secret stored in env variables.
    // e.g. process.env.REVALIDATION_SECRET
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();
    const { slug, category } = body;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    // Revalidate based on the post category (blog or news)
    revalidatePath(`/${category || 'blog'}/${slug}`)
    revalidatePath(`/${category || 'blog'}`)

    // Revalidate the sitemap to include the new post
    revalidatePath('/sitemap.xml');

    // --- Google Indexing API ---
    // If the required Google credentials exist in .env, ping Google to index the new URL
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.DOMAIN_NAME) {
      try {
        const jwtClient = new google.auth.JWT({
          email: process.env.GOOGLE_CLIENT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/indexing'],
        });
        
        await jwtClient.authorize();
        
        const baseUrl = process.env.DOMAIN_NAME.startsWith('http') 
          ? process.env.DOMAIN_NAME 
          : `https://${process.env.DOMAIN_NAME}`;
        
        const route = category || 'blog';
        const urlToIndex = `${baseUrl}/${route}/${slug}`;

        await google.indexing('v3').urlNotifications.publish({
          auth: jwtClient,
          requestBody: {
            url: urlToIndex,
            type: 'URL_UPDATED',
          },
        });
        
        console.log(`Successfully pinged Google Indexing API for ${urlToIndex}`);
      } catch (indexingError) {
        console.error('Failed to ping Google Indexing API:', indexingError);
      }
    } else {
      console.log('Skipping Google Indexing: GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY not set.');
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), slug });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
