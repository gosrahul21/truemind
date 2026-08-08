import { notFound } from 'next/navigation';
import prisma from '../../lib/prisma';
import Image from 'next/image';

// We do NOT use `export const revalidate = 60` or similar here.
// By default in Next.js, fetches without `revalidate` are cached indefinitely, 
// and we bust this cache via our on-demand webhook.
// For Prisma, we rely on Next.js Route Cache or data cache depending on Next version.
// Since we are building an ISR page driven by on-demand revalidation, 
// Next.js will cache this page when statically generated.

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  // In Next.js 15, params is a promise. Wait for it to resolve.
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = await prisma.post.findUnique({
    where: {
      domainName_slug: {
        slug, 
        domainName: `${process.env.DOMAIN_NAME}`
      }
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">{post.title}</h1>
        {post.authorName && (
          <p className="text-gray-500 dark:text-gray-400 text-lg">By {post.authorName} • {new Date(post.publishedAt).toLocaleDateString()}</p>
        )}
      </header>

      {post.coverImage && (
        <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
          {/* Using img tag to avoid domain config issues with next/image for external URLs */}
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {post.videoUrl && (
        <div className="mb-10 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src={post.videoUrl.replace("watch?v=", "embed/")} 
            title="Video Player"
            className="w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      )}

      <article 
        className="prose prose-lg md:prose-xl prose-indigo dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
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
    </main>
  );
}

// To use true ISR, we should generate static params for existing posts, but it's optional 
// if we use dynamic rendering that gets cached upon first request.
// Uncomment this to pre-build paths at build time:
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ select: { slug: true } });
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
