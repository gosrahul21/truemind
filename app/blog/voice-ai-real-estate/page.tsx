import React from 'react';
import { 
  Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, 
  CheckCircle2, Building2, PhoneCall, Filter, MapPin
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/components/Header'; // Adjust path based on your setup
import Button from '@/app/widgets/button';

const RealEstateBlog = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      {/* --- READING PROGRESS BAR --- */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="bg-indigo-600 h-full w-1/3"></div>
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
            <span className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100">
              Case Study: Real Estate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              The Portal Trap: How Voice AI is Saving Real Estate Teams from "Window Shopper" Leads
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
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Mar 22, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 7 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* --- FEATURED IMAGE --- */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1400" 
              alt="Modern high-rise residential apartment building" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 mb-8 italic">
              Indian real estate developers and brokers spend massive marketing budgets on portals like MagicBricks, 99acres, and Meta ads. But the problem in today's market isn't getting leads—the problem is that 80% of them are just "window shopping."
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-slate-900">The Cost of a "Dead" Lead</h2>
            <p>
              Picture a standard real estate sales floor. Your top closers are spending 6 hours a day dialing numbers from an Excel sheet. Half the numbers don't pick up, and the other half say, <em>"I'm just looking,"</em> or <em>"Your property is out of my budget."</em>
            </p>
            <p>
              Meanwhile, the genuine, highly-motivated buyer who submitted an inquiry 30 minutes ago has already been called and booked for a site visit by your competitor, simply because your team was busy talking to unqualified leads. 
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12 mt-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-indigo-600 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> The 5-Minute Mandate</h4>
                <p className="text-sm text-slate-600">Real estate is a high-emotion purchase. If a lead isn't contacted within 5 minutes of submitting a form, the chances of converting them into a site visit drop by over 400%.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2"><Filter className="w-4 h-4" /> The Filtration Crisis</h4>
                <p className="text-sm text-slate-600">Sales teams experience severe burnout asking the same qualification questions 100 times a day, leading to poor customer service on actual good calls.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The AI First Line of Defense</h2>
            <p>
              By deploying a Voice AI agent, you insert an intelligent filter between your marketing campaigns and your human sales team. The AI handles the grueling "top of funnel" work.
            </p>
            
            

            <p className="font-bold mt-8">The automated workflow:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Instant Outreach:</strong> The AI calls the lead exactly 2 seconds after the inquiry hits your CRM.</li>
              <li><strong>Intelligent Qualification:</strong> It asks the 3 critical questions human brokers hate repeating: <em>"Are you looking for a 2BHK or 3BHK?"</em>, <em>"Is your budget in the 60-80 Lakh range?"</em>, and <em>"Are you planning to buy in the next 3 months?"</em></li>
              <li><strong>The Handoff & Booking:</strong> If qualified, the AI books a site visit directly onto your team's calendar and instantly sends a WhatsApp message with the Google Maps pin. Unqualified leads receive a polite WhatsApp brochure and are tagged "Nurture" in the CRM.</li>
            </ul>

            <div className="bg-slate-900 text-white p-8 rounded-3xl my-12 shadow-xl border border-slate-800">
              <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2"><Building2 className="w-6 h-6 text-indigo-400" /> The Truemind Perspective</h3>
              <p className="text-slate-300">
                Property transactions are deeply personal, and buyers often prefer discussing financial matters in Hindi or their regional language. Our native multilingual models detect the user's language instantly. When a buyer hears a fluent, professional Hindi response asking about their family's space requirements, trust is built immediately—something an English-only IVR can never achieve.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Traditional Broker Teams vs. AI Frontline</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-4 font-bold text-slate-900">Metric</th>
                    <th className="py-4 font-bold text-slate-500">Human Telecalling Team</th>
                    <th className="py-4 font-bold text-indigo-600">Truemind Voice AI</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Time to First Call</td>
                    <td className="py-4">2 - 24 Hours</td>
                    <td className="py-4 font-semibold text-slate-900">&lt; 2 Seconds</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">After-Hours/Weekend Leads</td>
                    <td className="py-4">Ignored until Monday morning</td>
                    <td className="py-4 font-semibold text-slate-900">Qualified and booked 24/7</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold">Sales Team Focus</td>
                    <td className="py-4">Dialing dead numbers (80% of time)</td>
                    <td className="py-4 font-semibold text-slate-900">Closing warm site visitors (100% of time)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Stop Wasting Your Marketing Budget</h2>
            <p className="mb-6">
              You are paying premium rates for portal visibility and Meta Ads. Don't let those expensive leads leak out of your funnel because of slow follow-ups and telecaller fatigue. 
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Massive CAC Reduction:</strong> By increasing your lead-to-visit conversion rate, your overall Customer Acquisition Cost plummets.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span><strong>Protect Your Brand:</strong> Every inquiry gets a polite, professional, and immediate response, elevating your developer or agency brand above competitors.</span>
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
            
            <Button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700">
              Automate Your CRM Today
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
               <h4 className="text-indigo-600 font-bold mb-2">Technical & Architecture</h4>
               <h3 className="text-2xl font-bold mb-4">The Future of Multilingual Agents: English, Hindi, and Bengali</h3>
               <Link href="/blog/multilingual-ai-agents" className="text-slate-900 font-bold flex items-center gap-2">Read Technical Guide <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
            </div>
            <div className="p-8 bg-white rounded-[2rem] border border-slate-200 hover:shadow-xl transition-all">
               <h4 className="text-indigo-600 font-bold mb-2">Operations & Strategy</h4>
               <h3 className="text-2xl font-bold mb-4">Beyond Lead Gen: How Voice AI Automates Solar EPC Operations</h3>
               <Link href="/blog/voice-ai-solar-epc" className="text-slate-900 font-bold flex items-center gap-2">Read Case Study <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateBlog;