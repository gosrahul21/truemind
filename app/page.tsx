import { ArrowRight, ExternalLink, ChevronDown, Linkedin, Twitter } from 'lucide-react';
import Header from './components/Header';
import Link from 'next/link';
import Button from './widgets/button';
import { scrollToSection } from './utils/scrollToSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white relative selection:bg-cyan-500/30">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#0a0a0a] text-white pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20" style={{ backgroundImage: 'radial-gradient(#2A2A2A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="font-mono text-cyan-400 text-sm mb-8 tracking-widest uppercase">
              // est. 2025 — building in public
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              A lab where ideas<br />become apps.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              We experiment, build, and ship mobile, web, and iOS apps that solve real problems. No committees. No waiting. Just products in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 rounded-none font-bold text-lg transition-all flex items-center justify-center gap-2">
                See our products <ArrowRight className="w-5 h-5" />
              </Button>
              <Link
                href="#about"
                className="text-slate-300 hover:text-white px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Read our story
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-24 bg-[#141414] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-cyan-400 text-sm mb-16 tracking-widest uppercase">how we work</h2>
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            <div>
              <div className="font-mono text-4xl font-black text-slate-800 mb-6">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Learn fast</h3>
              <p className="text-slate-400 leading-relaxed">We pick up new tools, frameworks, and domains in days — not months. Curiosity is our competitive edge.</p>
            </div>
            <div>
              <div className="font-mono text-4xl font-black text-slate-800 mb-6">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fail fast</h3>
              <p className="text-slate-400 leading-relaxed">Every failed experiment is a case study. We document what broke, why, and what it taught us.</p>
            </div>
            <div>
              <div className="font-mono text-4xl font-black text-slate-800 mb-6">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ship fast</h3>
              <p className="text-slate-400 leading-relaxed">An idea sitting in a doc is not a product. We launch early, gather feedback, and improve in public.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SHOWCASE --- */}
      <section id="products" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-mono text-cyan-400 text-sm mb-6 tracking-widest uppercase">what we've built</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Products that exist in the world.</h3>
            <p className="text-slate-400 max-w-2xl text-lg">Every app here started as an experiment. Some are live, some are in beta, all are real.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product 1 */}
            {/* Product 2 */}
            <div className="bg-[#141414] border border-[#2A2A2A] p-8 md:p-12 hover:border-cyan-500/50 transition-all group md:mt-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center gap-2 text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span> Live
                </span>
                <span className="text-xs font-mono text-slate-500 border border-[#2A2A2A] px-3 py-1">Web</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">addsubtitles.tech</h4>
              <p className="text-slate-400 mb-8 text-lg">Add Viral Subtitles & Edit Videos in Seconds. Add subtitles automatically without watermarks. Fast, accurate, and packed with a massive collection of styles and AI-powered features. The ultimate web-based editor for TikTok, Shorts, and Reels.</p>
              <Link href="https://addsubtitles.tech" target="_blank" className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-3 transition-all">
                View <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-[#141414] border border-[#2A2A2A] p-8 md:p-12 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center gap-2 text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span> Live
                </span>
                <span className="text-xs font-mono text-slate-500 border border-[#2A2A2A] px-3 py-1">Extension</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Tab Guru</h4>
              <p className="text-slate-400 mb-8 text-lg">You opened that tab for a reason. Come back to it. Tab Guru gently reminds you why each tab exists — so you can browse with purpose, not just habit. No blocking. No judgment. Just a quiet nudge back to what matters.</p>
              <Link href="https://tabguru.truemindlabs.com" target="_blank" className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-3 transition-all">
                View <ExternalLink className="w-4 h-4" />
              </Link>
            </div>


            <div className="bg-[#141414] border border-[#2A2A2A] p-8 md:p-12 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center gap-2 text-xs font-mono bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span> Live
                </span>
                <span className="text-xs font-mono text-slate-500 border border-[#2A2A2A] px-3 py-1">Web</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Reddit Lead Assistant</h4>
              <p className="text-slate-400 mb-8 text-lg">An AI agent that finds high-intent leads on Reddit and drafts personalized outreach.</p>
              <Link href="#" className="inline-flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-3 transition-all">
                {/* View <ExternalLink className="w-4 h-4" /> */}
              </Link>
            </div>

          </div>

          <div className="text-center font-mono text-slate-500 text-sm mt-12">
            + More coming. We ship every few weeks.
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section id="case-studies" className="py-32 bg-[#141414] border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-mono text-cyan-400 text-sm mb-6 tracking-widest uppercase">case studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">We document what we learn.</h3>
            <p className="text-slate-400 text-lg max-w-2xl">Building in public means sharing the wins and the wreckage. Here's what we've learned from the things we've shipped.</p>
          </div>

          <div className="space-y-0">
            {[
              {
                date: 'Jun 2025',
                title: 'What we learned building Reddit Lead Assistant',
                readTime: '5 min read',
                href: '/case-studies/reddit-lead-assistant',
                description: 'An honest look at the architecture, the mistakes made along the way, and the final results.'
              },
              {
                date: 'May 2025',
                title: 'Why our first iOS app failed (and what we salvaged)',
                readTime: '8 min read',
                href: '/case-studies/first-ios-app-failed',
                description: 'A deep dive into the pitfalls of our first mobile launch and how we pivoted our strategy to recover.'
              },
              {
                date: 'Apr 2025',
                title: 'Switching from Next.js to raw React for speed',
                readTime: '4 min read',
                href: '/case-studies/nextjs-to-react',
                description: 'Why we ditched the framework overhead and embraced simplicity to achieve blazing fast load times.'
              }
            ].map((study, idx) => (
              <Link href={study.href} key={idx} className="block group border-b border-[#2A2A2A] py-8 relative transition-all hover:bg-[#0a0a0a] px-6 -mx-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <div className="font-mono text-slate-500 text-sm mb-3">{study.date}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                    <p className="text-slate-400 text-lg">{study.description}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0 shrink-0">
                    <span className="font-mono text-slate-500 text-sm">{study.readTime}</span>
                    <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES / WORK WITH US --- */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-mono text-cyan-400 text-sm mb-6 tracking-widest uppercase">for founders & teams</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Got a problem worth solving?<br />We build apps for people who mean it.</h3>
              <p className="text-slate-400 text-lg mb-12">
                TrueMindLabs takes on select app development projects. If you have a real problem and want a team that moves fast and cares about craft — let's talk.
              </p>
              <Link href="#contact" className="inline-flex border border-cyan-500 text-cyan-400 px-8 py-4 font-bold transition-all hover:bg-cyan-500/10 items-center gap-3 w-max">
                Start a conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="lg:pl-16">
              <ul className="space-y-8">
                {[
                  'Mobile App Development (iOS & Android)',
                  'Web App Development',
                  'MVP Scoping & Strategy',
                  'Rapid Prototyping & Validation',
                  'Product Design'
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white text-xl border-b border-[#2A2A2A] pb-8">
                    <div className="mt-1 font-mono text-cyan-400 text-sm">{'//'}</div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER --- */}
      <section id="about" className="py-32 bg-[#141414] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full aspect-square bg-[#0a0a0a] border border-[#2A2A2A] relative overflow-hidden group rounded-xl">
                <Link href="https://linkedin.com/in/gosrahul21" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/founder.jpeg" alt="Rahul Goswami" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-mono text-cyan-400 text-sm tracking-widest uppercase">the person behind it</h2>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/gosrahul21" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/truemindlabs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Built by someone who left the job to build.</h3>
              <div className="space-y-6 text-slate-400 text-lg mb-12">
                <p>
                  With over 5 years of software engineering experience building for both fast-paced startups and global MNCs, Rahul Goswami quit his job at the end of 2025 — not because he had a plan, but because he had a conviction. He started TrueMindLabs to walk the unknown path: building apps, shipping experiments, and documenting everything along the way.
                </p>
                <p>
                  No investors. No co-working buzzwords. Just a builder on a mission to make things that matter.
                </p>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-cyan-400 leading-tight">
                "I'd rather fail building something real than succeed doing nothing."
                <footer className="text-sm font-mono text-slate-500 mt-4">— Rahul Goswami</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS --- */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-slate-500 text-sm mb-12 tracking-widest uppercase text-center">by the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-mono text-5xl md:text-6xl font-black text-cyan-400 mb-2">3+</div>
              <div className="text-slate-500 font-mono text-sm">Apps shipped</div>
            </div>
            <div>
              <div className="font-mono text-5xl md:text-6xl font-black text-cyan-400 mb-2">12+</div>
              <div className="text-slate-500 font-mono text-sm">Experiments run</div>
            </div>
            <div>
              <div className="font-mono text-5xl md:text-6xl font-black text-cyan-400 mb-2">5+</div>
              <div className="text-slate-500 font-mono text-sm">Problems explored</div>
            </div>
            <div>
              <div className="font-mono text-5xl md:text-6xl font-black text-cyan-400 mb-2">2025</div>
              <div className="text-slate-500 font-mono text-sm">Year we started</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 bg-[#141414] border-t border-[#2A2A2A] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-mono text-cyan-400 text-sm mb-6 tracking-widest uppercase">let's build</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">Have an idea?<br />Let's make it real.</h3>
          <p className="text-slate-400 text-lg mb-12">
            Whether you want to build something together or just want to follow the journey — reach out. We respond to every message.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:hello@truemindlabs.com" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 font-bold text-lg transition-all flex items-center justify-center gap-2">
              hello@truemindlabs.com
            </a>
            <a href="https://twitter.com/truemindlabs" className="text-slate-400 hover:text-white px-8 py-4 transition-all font-mono">
              @truemindlabs
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <span className="text-xl font-bold font-mono text-white tracking-tight flex items-center mb-6">
                truemindlabs<span className="text-cyan-400">_</span>
              </span>
              <p className="text-slate-400 max-w-sm">
                A lab built for builders.
              </p>
              <p className="text-slate-500 text-sm mt-8">
                &copy; 2026 TrueMindLabs. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-slate-500 text-sm mb-6 uppercase">Links</h4>
              <ul className="space-y-4 text-slate-300">
                <li><Link href="#products" className="hover:text-cyan-400 transition-colors">Products</Link></li>
                <li><Link href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                <li><Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-slate-500 text-sm mb-6 uppercase">Social</h4>
              <ul className="space-y-4 text-slate-300">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">X / Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Product Hunt</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2A2A2A] text-center font-mono text-cyan-400 text-sm">
            Built fast. Shipped with conviction.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;