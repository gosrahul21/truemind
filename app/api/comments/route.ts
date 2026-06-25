import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

function getRedisClient() {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  
  const redisUrl = process.env.UPSTASH_REDIS_URL || "";
  const match = redisUrl.match(/rediss?:\/\/[^:]*:([^@]+)@([^:]+)/);
  if (match) {
    const token = match[1];
    const host = match[2];
    return new Redis({
      url: `https://${host}`,
      token: token,
    });
  }
  
  throw new Error("Could not initialize Upstash Redis from environment variables.");
}

export async function POST(request: Request) {
  try {
    const redis = getRedisClient();
    const { slug, name, text } = await request.json();
    if (!slug || !text) {
      return NextResponse.json({ error: 'Slug and text are required' }, { status: 400 });
    }
    
    const comment = {
      id: Date.now().toString(),
      name: name?.trim() || 'Anonymous',
      text: text.trim(),
      createdAt: new Date().toISOString()
    };

    // Store in a Redis List
    await redis.lpush(`comments:${slug}`, JSON.stringify(comment));
    
    return NextResponse.json({ success: true, comment });
  } catch (error) {
    console.error('Error posting comment:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const redis = getRedisClient();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    if (!slug) return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    
    // Get all comments for this slug (0 to -1 fetches the entire list)
    const rawComments = await redis.lrange(`comments:${slug}`, 0, -1);
    
    // Upstash sometimes returns already parsed objects, sometimes strings
    const comments = rawComments.map((c: any) => typeof c === 'string' ? JSON.parse(c) : c);
    
    return NextResponse.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
