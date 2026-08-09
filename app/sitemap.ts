import { MetadataRoute } from 'next'
import { client } from '../sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use the DOMAIN_NAME from environment variables or fallback to a default domain
  const baseUrl = process.env.DOMAIN_NAME 
    ? (process.env.DOMAIN_NAME.startsWith('http') ? process.env.DOMAIN_NAME : `https://${process.env.DOMAIN_NAME}`)
    : 'https://www.truemindlabs.com';

  // Fetch all posts to include in the sitemap
  const query = `*[_type == "post"] {
    "slug": slug.current,
    category,
    publishedAt
  }`;
  
  const posts = await client.fetch(query);

  const postUrls = posts.map((post: any) => {
    // Determine the base path based on the post category (defaulting to blog)
    const route = post.category || 'blog';
    
    return {
      url: `${baseUrl}/${route}/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postUrls,
  ]
}
