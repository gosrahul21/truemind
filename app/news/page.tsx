import React from 'react';
import { 
  ArrowRight, Search, Clock, User, Tag, 
  ChevronRight, Calendar, Share2
} from 'lucide-react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Link from 'next/link';
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';

const NewsPage = async () => {
  const categories = ["All", "Company", "Product", "Industry", "Events"];

  const query = `*[_type == "post" && category == "news" && domainName == $domainName] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    "image": coverImage,
    authorName,
    publishedAt,
    tags
  }`;
  
  const sanityPosts = await client.fetch(query, {
    domainName: process.env.DOMAIN_NAME || 'default-domain'
  }, { cache: 'force-cache' });

  const allPosts = sanityPosts.map((post: any) => ({
    id: post._id,
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.tags && post.tags.length > 0 ? post.tags[0] : 'News',
    author: post.authorName || 'Truemind Labs',
    date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }),
    readTime: "3 min read",
    image: post.image ? urlForImage(post.image) : 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
    slug: post.slug
  }));

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-cyan-500/30">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 bg-[#0a0a0a] text-white border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6">
            Updates & Announcements
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
            The <span className="text-cyan-400">TruemindLabs</span> Newsroom
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stay up to date with our latest product releases, company announcements, and industry events.
          </p>
        </div>
      </section>

      {/* --- FILTER & SEARCH BAR --- */}
      <section className="py-8 border-b border-[#2A2A2A] sticky top-16 bg-[#0a0a0a]/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`px-4 py-2 font-mono text-sm tracking-wider uppercase whitespace-nowrap transition-colors border ${cat === 'All' ? 'bg-cyan-500 text-slate-900 border-cyan-500 font-bold' : 'bg-[#141414] text-slate-400 border-[#2A2A2A] hover:border-cyan-500/50 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full pl-10 pr-4 py-2 bg-[#141414] border border-[#2A2A2A] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-all font-mono"
            />
          </div>
        </div>
      </section>

      {/* --- NEWS LIST --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allPosts.length > 0 ? allPosts.map((post: any) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden bg-[#141414] border border-[#2A2A2A]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0a0a0a]/90 backdrop-blur-sm px-3 py-1 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border border-[#2A2A2A]">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-cyan-400 transition-colors">
                    <Link href={`/news/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between border-t border-[#2A2A2A]/50 mt-4">
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center text-slate-900 text-[10px] font-bold">
                        {post.author.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-bold text-white">{post.author}</span>
                    </div>
                    <Link href={`/news/${post.slug}`} className="text-cyan-400 mt-4">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            )) : (
              <div className="col-span-full text-center py-20">
                <p className="text-slate-500 text-lg font-mono">No news articles found.</p>
              </div>
            )}
          </div>

          {/* Pagination or Load More */}
          {allPosts.length > 0 && (
            <div className="mt-20 text-center">
              <button className="px-8 py-4 bg-[#141414] border border-[#2A2A2A] font-bold text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all">
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- NEWSLETTER CAPTURE --- */}
      <section className="pb-24 px-4 border-t border-[#2A2A2A] pt-24 bg-[#141414]">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-[#2A2A2A] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay ahead of the curve</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              Join our network receiving bi-weekly breakdowns of product experiments, tech deep-dives, and things we build.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="flex-1 px-6 py-4 bg-[#141414] border border-[#2A2A2A] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all font-mono"
              />
              <button className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] text-white py-12 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm font-mono tracking-widest">
            <span className="text-xl font-bold text-white mb-4 inline-block">
              truemindlabs<span className="text-cyan-400">_</span>
            </span>
            <p className="mt-2">© 2026 TrueMindLabs. Engineering Intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
