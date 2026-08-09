import { notFound } from 'next/navigation';
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import TableOfContents from '../../components/TableOfContents';
import { extractHeadings } from '../../lib/toc';
import { portableTextComponents } from '../../components/PortableTextComponents';

// We do NOT use `export const revalidate = 60` or similar here.
// By default in Next.js, fetches without `revalidate` are cached indefinitely, 
// and we bust this cache via our on-demand webhook.
// Since we are building an ISR page driven by on-demand revalidation, 
// Next.js will cache this page when statically generated.

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

function getEmbedUrl(url: string) {
  if (!url) return '';
  if (url.includes('youtube.com/shorts/')) {
    return url.replace('youtube.com/shorts/', 'youtube.com/embed/');
  } else if (url.includes('watch?v=')) {
    return url.replace('watch?v=', 'embed/');
  } else if (url.includes('youtu.be/')) {
    return url.replace('youtu.be/', 'youtube.com/embed/');
  } else if (url.includes('tiktok.com')) {
    // Basic fallback for tiktok, though tiktok oembed is usually better
    const videoId = url.split('/').pop()?.split('?')[0];
    return `https://www.tiktok.com/embed/v2/${videoId}`;
  }
  return url;
}

export default async function BlogPost({ params }: BlogPostProps) {
  // In Next.js 15, params is a promise. Wait for it to resolve.
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "post" && category == "blog" && slug.current == $slug && domainName == $domainName][0]`;
  const post = await client.fetch(query, { 
    slug, 
    domainName: process.env.DOMAIN_NAME || 'default-domain' 
  });

  if (!post) {
    notFound();
  }

  // Extract headings from the content blocks for the TOC
  const headings = post.content ? extractHeadings(post.content) : [];

  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-start relative">
        
        {/* Left Side: Main Content */}
        <div className="w-full lg:flex-1 min-w-0 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
            {post.authorName && (
              <p className="text-gray-500 dark:text-gray-400 text-lg">By {post.authorName} • {new Date(post.publishedAt).toLocaleDateString()}</p>
            )}
          </header>

          {post.coverImage && (
            <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
              {/* Using img tag to avoid domain config issues with next/image for external URLs */}
              <img 
                src={urlForImage(post.coverImage)} 
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {post.videoUrl && (
            <div className="mb-10 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src={getEmbedUrl(post.videoUrl)} 
                title="Video Player"
                className="w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          )}

          <article className="prose prose-lg md:prose-xl prose-indigo dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
            {post.content && (
              <PortableText 
                value={post.content} 
                components={portableTextComponents} 
              />
            )}
          </article>
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Table of Contents */}
        {headings.length > 0 && (
          <aside className="hidden lg:block w-72 flex-shrink-0 self-start sticky top-24">
            <TableOfContents headings={headings} />
          </aside>
        )}
      </div>
    </main>
  );
}

// To use true ISR, we should generate static params for existing posts, but it's optional 
// if we use dynamic rendering that gets cached upon first request.
// Uncomment this to pre-build paths at build time:
export async function generateStaticParams() {
  const query = `*[_type == "post" && category == "blog"]{ slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}
