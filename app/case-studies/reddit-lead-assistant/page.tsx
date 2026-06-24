import Header from '../../components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-cyan-500/30">
      <Header />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#case-studies" className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 font-mono text-slate-500 text-sm">
            <span>Jun 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What we learned building Reddit Lead Assistant
          </h1>
          <p className="text-xl text-slate-400">
            An honest look at the architecture, the mistakes made along the way, and the final results.
          </p>
        </div>
        
        <article className="prose prose-invert prose-cyan lg:prose-lg max-w-none text-slate-300">
          <p>Building an AI agent to scrape and interact with Reddit was our first major foray into autonomous outreach. The goal was simple: find high-intent users complaining about problems our clients solve, and draft personalized DMs.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Architecture</h2>
          <p>We started with a Python backend using praw (Python Reddit API Wrapper) and hooked it up to OpenAI's GPT-4. The infrastructure was hosted on Vercel and Render.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Mistakes</h2>
          <p>Our biggest mistake was underestimating Reddit's rate limits and anti-bot mechanisms. In the first week, our accounts were repeatedly shadowbanned because the agent was moving too fast and sending identical messages.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Results</h2>
          <p>After implementing random delays, varying the prompt structures, and adding a human-in-the-loop review system, the conversion rate jumped to 14%. It taught us that AI automation needs to mimic human unpredictability to survive on social platforms.</p>
        </article>
      </main>
    </div>
  );
}
