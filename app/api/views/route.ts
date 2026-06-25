import { NextResponse } from 'next/server';
import Redis from 'ioredis';

const redisUrl = process.env.UPSTASH_REDIS_URL;

// Create a single instance to be reused
const redis = new Redis(redisUrl!);

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    if (!slug) return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    
    // Increment the view count for the given slug
    const views = await redis.incr(`views:${slug}`);
    
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
