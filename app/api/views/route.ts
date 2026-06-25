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
