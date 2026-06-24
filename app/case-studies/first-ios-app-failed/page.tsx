import Header from '../../components/Header';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy2() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-cyan-500/30">
      <Header />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#case-studies" className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-8 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 font-mono text-slate-500 text-sm">
            <span>May 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why our first iOS app failed (and what we salvaged)
          </h1>
          <p className="text-xl text-slate-400">
            A deep dive into the pitfalls of our first mobile launch and how we pivoted our strategy to recover.
          </p>
        </div>
        
        <article className="prose prose-invert prose-cyan lg:prose-lg max-w-none text-slate-300">
          <p>We thought building a native iOS habit tracker would be our ticket to recurring revenue. We spent two months perfecting the UI, adding custom animations, and over-engineering the backend.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Where It Went Wrong</h2>
          <p>We built for ourselves, not for a specific audience. The habit tracking space was already saturated, and we didn't have a unique distribution channel. When we launched on Product Hunt, we got 200 downloads, and exactly zero paying subscribers after the 7-day trial.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Post-Mortem</h2>
          <p>We realized that consumer mobile apps require massive marketing budgets or inherent virality. We had neither.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What We Salvaged</h2>
          <p>We didn't throw everything away. The beautiful component library we built for the app was repurposed into a premium UI kit that we sold to other developers, which ended up making $5,000 in its first month. We learned that pivoting the asset is sometimes better than pivoting the product.</p>
        </article>
      </main>
    </div>
  );
}
