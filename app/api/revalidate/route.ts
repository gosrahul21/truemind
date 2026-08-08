import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');
    
    // In production, use a secure secret stored in env variables.
    // e.g. process.env.REVALIDATION_SECRET
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    // Revalidate the specific blog post
    revalidatePath(`/blog/${slug}`);
    
    // Also revalidate the main blog list page if you have one
    revalidatePath('/blog');

    return NextResponse.json({ revalidated: true, now: Date.now(), slug });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
