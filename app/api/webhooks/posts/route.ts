import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // 1. Verify Authentication
    // Check for a secret token to prevent unauthorized access
    const secret = request.nextUrl.searchParams.get('secret') || request.headers.get('authorization')?.replace('Bearer ', '');
    const validSecret = process.env.WEBHOOK_SECRET || process.env.REVALIDATION_SECRET;
    
    if (!secret || secret !== validSecret) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse Request Body
    const body = await request.json();
    const { 
      domainName, 
      slug, 
      title, 
      content, 
      excerpt, 
      coverImage, 
      videoUrl, 
      authorName, 
      tags 
    } = body;

    // 3. Validate Required Fields
    if (!domainName || !slug || !title || !content) {
      return NextResponse.json({ 
        message: 'Missing required fields: domainName, slug, title, content' 
      }, { status: 400 });
    }

    // 4. Save to Database
    const post = await prisma.post.create({
      data: {
        domainName,
        slug,
        title,
        content,
        excerpt,
        coverImage,
        videoUrl,
        authorName,
        tags: tags || [],
      }
    });

    // 5. Trigger Revalidation
    // So the new page gets built/cached properly by Next.js
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/blog'); // Or whatever the listing path is

    return NextResponse.json({ 
      success: true, 
      message: 'Page created successfully',
      post 
    }, { status: 201 });

  } catch (err: any) {
    console.error('Error creating page via webhook:', err);
    
    // Check for Prisma unique constraint violation (e.g. slug already exists)
    if (err.code === 'P2002') {
      return NextResponse.json({ 
        success: false, 
        message: 'A page with this domainName and slug already exists.' 
      }, { status: 409 });
    }

    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error',
      error: err.message 
    }, { status: 500 });
  }
}
