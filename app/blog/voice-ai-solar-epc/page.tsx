import { 
  Calendar, Clock, User, ArrowLeft, 
  Share2, Linkedin, Twitter, CheckCircle2,
  Sun, FileText, Wrench
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/components/Header'; // Adjust path based on your setup
import Button from '@/app/widgets/button';
import Image from 'next/image';

const SolarBlogDeepDive = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      {/* --- READING PROGRESS BAR --- */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="bg-amber-500 h-full w-1/3"></div>
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
            <span className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-100">
              Operations & Strategy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Beyond Lead Gen: How Voice AI Automates Solar EPC Operations
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
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Mar 18, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* --- FEATURED IMAGE --- */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl relative">
            <Image 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1400" 
              alt="Solar Panel Array installation" 
              width={"100"}
              className="w-full h-full object-cover"
            />
            
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 mb-8 italic">
              When you look at the economics of starting a solar EPC—especially when operating on a tight initial budget or launching a new regional franchise—hiring a massive back-office team simply isn&apos;t viable. Generating leads is only 20% of the battle. The real profit drain lies in operations.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">The Real Bottleneck</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-amber-600 mb-2 flex items-center gap-2"><FileText className="w-4 h-4" /> Paperwork Paralysis</h4>
                <p className="text-sm text-slate-600">State nodal agencies (like JREDA) require endless documentation for PM-Surya Ghar subsidies. Chasing customers for updated electricity bills kills sales momentum.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-blue-600 mb-2 flex items-center gap-2"><Wrench className="w-4 h-4" /> AMC Neglect</h4>
                <p className="text-sm text-slate-600">Dust accumulation drops panel efficiency by 30%. EPCs lose massive recurring revenue by forgetting to schedule post-installation maintenance calls.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">How Voice AI Changes the Game</h2>
            <p>
              Success in Solar EPC requires lean operations. By delegating qualification, document collection, and AMC scheduling to Voice AI, you free up your human capital to do what they do best: close high-ticket deals and engineer better systems.
            </p>
            
            <p className="font-bold mt-4">Key automated workflows include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Pre-Qualification:</strong> AI automatically calls leads to check roof ownership, shadow-free area, and current sanctioned load before sending a site engineer.</li>
              <li><strong>Subsidy Follow-ups:</strong> Automated calls remind customers to upload their property tax receipts and electricity bills via WhatsApp.</li>
              <li><strong>Predictive Cleaning:</strong> AI triggers seasonal outreach to schedule panel cleaning, securing recurring service revenue.</li>
            </ul>

            <div className="bg-slate-900 text-white p-8 rounded-3xl my-12 shadow-xl">
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2"><Sun className="w-6 h-6 text-amber-400" /> The Truemind Perspective</h3>
              <p className="text-slate-300">
                Most solar franchises lose up to 15% of their potential net margin due to delayed documentation and inefficient labor routing. We don&apos;t just build "chatbots"—we integrate Voice Agents directly into your CRM to automate the entire post-sale lifecycle, preserving your hardware margins.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Traditional vs. AI-Powered EPC</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-4 font-bold text-slate-900">Operation Task</th>
                    <th className="py-4 font-bold text-slate-500">Traditional Method</th>
                    <th className="py-4 font-bold text-blue-600">Truemind Voice AI</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Lead Response Time</td>
                    <td className="py-4">12 to 24 hours (Manual Call)</td>
                    <td className="py-4 font-semibold text-slate-900">Under 2 seconds</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Subsidy Document Collection</td>
                    <td className="py-4">Sales rep chases customer for weeks</td>
                    <td className="py-4 font-semibold text-slate-900">Automated WhatsApp + Voice prompts</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Annual Maintenance (AMC)</td>
                    <td className="py-4">Relies on Excel sheets and memory</td>
                    <td className="py-4 font-semibold text-slate-900">Triggered automatically by install date</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Is Your Franchise Ready?</h2>
            <p className="mb-6">
              If your team is spending more time doing paperwork and making reminder calls than actually surveying roofs and closing deals, it&apos;s time to automate.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Reduce CAC (Customer Acquisition Cost):</strong> Stop losing the expensive leads you paid for on Google and Meta due to slow follow-ups.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Scale Without Bloat:</strong> Handle 10x the inquiry volume during peak subsidy seasons without hiring temporary data-entry staff.</span>
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
              Get a Free ROI Audit
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
               <h4 className="text-blue-600 font-bold mb-2">AI Strategy</h4>
               <h3 className="text-2xl font-bold mb-4">OpenAI vs Generative AI: What’s the Real Difference?</h3>
               <Link href="/blog/openai-vs-generative-ai" className="text-slate-900 font-bold flex items-center gap-2">Read Strategy Guide <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
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

export default SolarBlogDeepDive;