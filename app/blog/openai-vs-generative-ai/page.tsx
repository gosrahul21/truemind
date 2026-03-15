import React from 'react';
import { 
  Calendar, Clock, User, ArrowLeft, 
  Share2, Linkedin, Twitter, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/components/Header'; // Adjust path based on your setup
import Button from '@/app/widgets/button';

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      {/* --- READING PROGRESS BAR (Optional visual) --- */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="bg-blue-600 h-full w-1/3"></div>
      </div>

      <article className="pt-32 pb-24">
        {/* --- HEADER SECTION --- */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
          
          <div className="space-y-6">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              AI Strategy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              OpenAI vs Generative AI: What’s the Real Difference?
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                  RG
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Rahul Goswami</p>
                  <p className="text-xs text-slate-500">Founder, Truemind Labs</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Mar 15, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* --- FEATURED IMAGE --- */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
              alt="OpenAI vs Generative AI" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 mb-8 italic">
              Artificial intelligence is evolving faster than most businesses can track. While the terms &quot;OpenAI&quot; and &quot;Generative AI&quot; are often used interchangeably, they represent two fundamentally different concepts. 
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">The Quick Definition</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-blue-600 mb-2">OpenAI</h4>
                <p className="text-sm text-slate-600">A research company and lab (the <strong>entity</strong>).</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-cyan-600 mb-2">Generative AI</h4>
                <p className="text-sm text-slate-600">A category of AI technology that creates content (the <strong>engine</strong>).</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">What is OpenAI?</h2>
            <p>
              Founded in 2015, OpenAI is an AI research organization. Their mission is to build &quot;Artificial General Intelligence&quot; (AGI) that benefits humanity. At Truemind Labs, we often leverage OpenAI&apos;s models as the backbone for high-performance voice agents.
            </p>
            <p className="font-bold mt-4">Well-known OpenAI products include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>ChatGPT:</strong> The conversational assistant everyone knows.</li>
              <li><strong>DALL·E:</strong> The system that turns text into visual art.</li>
              <li><strong>GPT-4o:</strong> The multi-modal &quot;brain&quot; behind modern AI applications.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">What is Generative AI?</h2>
            <p>
              Generative AI is the broader technological umbrella. It refers to systems that don&apos;t just analyze existing data, but <strong>create something entirely new</strong>—be it text, code, images, or human-like voice.
            </p>
            <div className="bg-blue-600 text-white p-8 rounded-3xl my-12">
              <h3 className="text-white text-2xl font-bold mb-4">The Truemind Perspective</h3>
              <p className="text-blue-50">
                While OpenAI is a leader, &quot;Generative AI&quot; also includes models from Google (Gemini), Meta (Llama), and Anthropic (Claude). For our clients in <strong>Solar and Agriculture</strong>, we choose the best model for the specific job—whether it&apos;s regional language accuracy or data privacy.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Key Comparison</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-4 font-bold text-slate-900">Aspect</th>
                    <th className="py-4 font-bold text-blue-600">OpenAI</th>
                    <th className="py-4 font-bold text-slate-900">Generative AI</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Nature</td>
                    <td className="py-4">Company/Lab</td>
                    <td className="py-4">Technology Category</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Goal</td>
                    <td className="py-4">Building AGI</td>
                    <td className="py-4">Content Generation</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Examples</td>
                    <td className="py-4">GPT-4, Codex</td>
                    <td className="py-4">GANs, Transformers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Which Should Businesses Choose?</h2>
            <p className="mb-6">
              For most SMBs and enterprises, you aren&apos;t choosing &quot;between&quot; them. You are choosing how to implement <strong>Generative AI</strong>.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Use OpenAI</strong> for fast prototyping, general-purpose bots, and world-class reasoning.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Use Custom GenAI</strong> for strict data privacy, offline processing, or niche industries like specialized Agri-tech.</span>
              </li>
            </ul>
          </div>

          {/* --- SOCIAL SHARE & CTA --- */}
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Share Article</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></button>
                <button className="p-2 rounded-full bg-slate-50 hover:bg-sky-50 hover:text-sky-500 transition-colors"><Twitter className="w-5 h-5" /></button>
                <button className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
            
            <Button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20">
              Build Your AI Strategy
            </Button>
          </div>
        </div>
      </article>

      {/* --- RELATED POSTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-[2rem] border border-slate-200 hover:shadow-xl transition-all">
               <h4 className="text-blue-600 font-bold mb-2">Case Study</h4>
               <h3 className="text-2xl font-bold mb-4">Voice AI in Solar: 3x Appointments in 30 Days</h3>
               <Link href="#" className="text-slate-900 font-bold flex items-center gap-2">Read Case Study <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
            </div>
            <div className="p-8 bg-white rounded-[2rem] border border-slate-200 hover:shadow-xl transition-all">
               <h4 className="text-blue-600 font-bold mb-2">Technical</h4>
               <h3 className="text-2xl font-bold mb-4">Managing Multilingual Intent in Voice Agents</h3>
               <Link href="#" className="text-slate-900 font-bold flex items-center gap-2">Read Technical Guide <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;