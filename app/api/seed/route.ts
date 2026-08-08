import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const post = await prisma.post.create({
      data: {
        domainName: "truemindlabs.com",
        slug: "sample-post",
        title: "My First Sample Post",
        content: "<p>This is a beautifully formatted sample post! It was dynamically inserted into your database.</p>",
        authorName: "Antigravity",
        coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        tags: ["technology", "nextjs", "prisma"]
      }
    });
    return NextResponse.json({ success: true, post });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
