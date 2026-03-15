import React from 'react';
import { 
  ArrowRight, Search, Clock, User, Tag, 
  ChevronRight, Calendar, Share2
} from 'lucide-react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Link from 'next/link';

const BlogPage = () => {
  const categories = ["All", "AI Strategy", "Voice AI", "Case Studies", "Technical"];

  const blogPosts = [
    {
      id: 1,
      title: "OpenAI vs Generative AI: What’s the Real Difference?",
      excerpt: "Many businesses confuse the company with the technology. We break down why knowing the difference matters for your AI strategy.",
      category: "AI Strategy",
      author: "Rahul Goswami",
      date: "Mar 15, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      slug: "openai-vs-generative-ai"
    },
    {
      id: 2,
      title: "How Voice AI is Solving the 'Missed Lead' Crisis in Solar EPC",
      excerpt: "In the high-ticket Solar industry, a missed call is a missed lakhs of revenue. Here is how automated agents bridge the gap.",
      category: "Case Studies",
      author: "Truemind Research",
      date: "Mar 10, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      slug: "voice-ai-solar-epc"
    },
    {
      id: 3,
      title: "The Future of Multilingual Agents: English, Hindi, and Bengali",
      excerpt: "Bridging the language gap in India's digital economy using advanced Large Language Models and custom intent detection.",
      category: "Voice AI",
      author: "Rahul Goswami",
      date: "Mar 05, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
      slug: "multilingual-ai-agents"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Insights & Research
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Truemind</span> Journal
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Exploring the intersection of Voice AI, regional automation, and business ROI. 
            No hype—just practical intelligence for the modern enterprise.
          </p>
        </div>
      </section>

      {/* --- FILTER & SEARCH BAR --- */}
      <section className="py-8 border-b border-slate-100 sticky top-16 bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${cat === 'All' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* --- BLOG LIST --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-3xl bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                        RG
                      </div>
                      <span className="text-sm font-bold text-slate-700">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination or Load More */}
          <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER CAPTURE --- */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay ahead of the AI curve</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              Join 500+ business owners receiving our bi-weekly breakdown of AI automation strategies that actually work.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Work email address" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all">
                Subscribe
              </button>
            </form>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
            <Logo color="white" />
            <p className="mt-4">© 2026 Truemind Labs. Engineering Intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;