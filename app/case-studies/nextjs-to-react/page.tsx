import Header from '../../components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy3() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-cyan-500/30">
      <Header />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#case-studies" className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 font-mono text-slate-500 text-sm">
            <span>Apr 2025</span>
            <span>•</span>
            <span>4 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Switching from Next.js to raw React for speed
          </h1>
          <p className="text-xl text-slate-400">
            Why we ditched the framework overhead and embraced simplicity to achieve blazing fast load times.
          </p>
        </div>
        
        <article className="prose prose-invert prose-cyan lg:prose-lg max-w-none text-slate-300">
          <p>Next.js is an incredible framework, and we use it for almost everything. But for one of our internal dashboards, the overhead was becoming a problem.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Problem</h2>
          <p>The dashboard was a heavy client-side application that didn't need SEO. We were battling with hydration mismatches, complex server-component boundaries, and slow hot-reloading during development because of the sheer size of the data visualization libraries we were using.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Solution</h2>
          <p>We decided to rewrite the dashboard using raw React + Vite. We removed Server-Side Rendering completely and opted for a traditional SPA (Single Page Application) architecture.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Impact</h2>
          <p>Our development build times dropped from 12 seconds to under 500ms. Production build sizes shrank by 40%. While this approach isn't right for public-facing landing pages, it was the perfect pivot for an internal tool where developer velocity and raw client-side performance mattered most.</p>
        </article>
      </main>
    </div>
  );
}
