import { 
  Bot, Users, CheckCircle, Clock, DollarSign, BarChart3, 
  MessageSquare, Mail, Building2, Rocket, Target, Zap, 
  Phone, Star, TrendingUp, ArrowRight, Linkedin, Twitter, 
  Play, Volume2, ShieldCheck, MapPin, Globe
} from 'lucide-react';
import Header from './components/Header';
import Logo from './components/Logo';
import Form from './components/Form';
import ChatWidget from './components/ChatWidget';
import Link from 'next/link';
import { scrollToSection } from './utils/scrollToSection';
import Button from './widgets/button';

const LandingPage = () => {
  const stats = [
    { number: '70%', label: 'Lower Staff Costs' },
    { number: '24/7', label: 'Day & Night Coverage' },
    { number: '15 Days', label: 'Guaranteed Deployment' },
    { number: '99%', label: 'Human-like Accuracy' }
  ];

  const automationUseCases = [
    {
      title: 'Automatic Sales Calling',
      description: 'AI callers that talk to your customers like a real staff member and book meetings directly into your CRM or diary.',
      benefit: '3x More Sales Appointments',
      icon: Phone,
      color: 'blue'
    },
    {
      title: 'Smart Reminders',
      description: 'Automated payment and service reminders via Voice, WhatsApp, and SMS with intent detection.',
      benefit: 'Reduce overdue payments by 40%',
      icon: Clock,
      color: 'cyan'
    },
    {
      title: 'Smart Lead Sorting',
      description: 'Analyze customer replies to decide who is ready to buy, who needs a reminder, and who should go to a human.',
      benefit: 'No more manual data entry',
      icon: Target,
      color: 'purple'
    }
  ];

  const industryVerticals = [
    {
      name: 'Solar & EPC',
      context: 'Case Study: Life Solar',
      features: ['Automatic Customer Filtering', 'Project Update Alerts', 'Maintenance Alerts'],
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Agri-Business',
      context: 'Case Study: Jharkhand Fertilizers',
      features: ['Seasonal Sowing Alerts', 'Subsidy Notifications', 'Weather Warnings'],
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Home Services',
      context: 'Case Study: Oraplus',
      features: ['Staff Booking & Routing', 'Real-time ETA', 'Feedback Collection'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=400',
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 relative">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020617] text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> 15-Day Deployment Guarantee
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                AI Agents with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Human Mind</span>
              </h1>
              <p className="text-lg  mb-10 text-slate-400 max-w-xl leading-relaxed">
                Scalable AI solutions for India and the world. Our smart calling assistants interact naturally in English, Hindi, and Bengali to bridge the gap between your business and its customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                  Launch Your Agent <ArrowRight className="w-5 h-5" />
                </Button>
                {/* very important for the future */}
                {/* <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 fill-current" /> Hear Voice Demo
                </button> */}
              </div>
            </div>

            {/* Visual Feature: The "Mind" Interface */}
            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                    <span className="text-sm font-mono text-slate-400">TRUEMIND VOICE AGENT</span>
                  </div>
                  <Volume2 className="text-blue-400" />
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-2xl rounded-tl-none ml-0 mr-12">
                    <p className="text-sm text-blue-100">&quot;Hello! I&apos;m calling from Life Solar regarding your installation scheduled for tomorrow. Is 10 AM still good for you?&quot;</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tr-none ml-12 mr-0 text-right">
                    <p className="text-sm text-slate-300">&quot;Actually, can we move it to 2 PM?&quot;</p>
                  </div>
                  <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-2xl rounded-tl-none ml-0 mr-12">
                    <p className="text-sm text-blue-100">&quot;Of course. I&apos;ve updated the technicians&apos; schedule to 2 PM. You&apos;ll receive a confirmation SMS shortly.&quot;</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                  <div className="text-xs text-slate-500">Response Time: Instant</div>
                  <div className="text-xs text-green-400 font-mono italic">Action: Booking Updated ✅</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE TRUEMIND ECOSYSTEM (REAL BUSINESSES) --- */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Built for Real Businesses</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don&apos;t just build AI; we solve real-world operational challenges. Our technology powers industry leaders across global markets.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryVerticals.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">{item.context}</p>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT WE AUTOMATE --- */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">One Mind. <br/><span className="text-blue-600">Infinite Tasks.</span></h2>
              <p className="text-slate-600 text-lg">Stop losing money on missed calls and forgotten follow-ups. Our AI agents handle the repetitive &quot;Mind-Work&quot; so you can focus on strategy.</p>
            </div>
            <Link href="#contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationUseCases.map((useCase, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all shadow-sm">
                <div className={`w-14 h-14 rounded-2xl bg-${useCase.color}-50 flex items-center justify-center mb-6`}>
                  <useCase.icon className={`w-7 h-7 text-${useCase.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-slate-600 mb-6">{useCase.description}</p>
                <div className="p-3 bg-green-50 rounded-xl text-green-700 font-bold text-sm inline-block">
                  {useCase.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Straightforward Investment</h2>
          <p className="text-slate-400 mb-16">Setup in 15 days. No hidden fees. Professional AI for serious businesses.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Growth Plan */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-left">
              <h3 className="text-xl font-bold mb-2">Business Growth</h3>
              <div className="text-4xl font-black mb-6">$4,900 <span className="text-sm font-normal text-slate-400">/setup</span></div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Single Voice Agent</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> WhatsApp Integration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 3 Months Maintenance</li>
                <li className="flex items-center gap-2 font-bold text-white italic"><Clock className="w-4 h-4" /> 15-Day Deployment</li>
              </ul>
              <Button className="w-full inline-flex justify-center py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition-all font-bold">
                Contact Sales
              </Button>
            </div>

            {/* Scale & Voice Plan (MOST POPULAR) */}
            <div className="bg-blue-600 p-8 rounded-3xl text-left transform md:scale-110 shadow-2xl shadow-blue-600/20 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Recommended</div>
              <h3 className="text-xl font-bold mb-2">Scale & Voice</h3>
              <div className="text-4xl font-black mb-6">$14,500 <span className="text-sm font-normal text-blue-100">/setup</span></div>
              <ul className="space-y-4 mb-8 text-blue-50">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white" /> Multiple AI Personalities</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white" /> Advanced CRM Sync</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white" /> 6 Months Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white" /> Custom Intent Detection</li>
                <li className="flex items-center gap-2 font-bold text-white italic"><Clock className="w-4 h-4" /> Priority 15-Day Launch</li>
              </ul>
              <Button  className="w-full inline-flex justify-center py-3 rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all font-bold">
                Contact Sales
              </Button>
            </div>

            {/* Custom Ecosystem Plan */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 text-left">
            <h3 className="text-xl font-bold mb-2">Full Business Automation</h3>
              <div className="text-4xl font-black mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Full Automation Suite</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> White-label Options</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Dedicated Lab Support</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Multi-country Deployment</li>
              </ul>
              <Button className="w-full inline-flex justify-center py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition-all font-bold">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & ROI SECTION --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight italic">Let&apos;s talk about <span className="text-blue-600 underline">ROI</span>, not just AI.</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Globe className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Global Infrastructure</h4>
                    <p className="text-slate-500">Processing millions of customer intents with a focus on regional accuracy and enterprise-grade reliability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Operational Security</h4>
                    <p className="text-slate-500">99.9% Uptime SLA for critical payment and service reminders across all international time zones.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Direct Communication</p>
                <div className="space-y-2">
                  <a href="mailto:hello@truemindlabs.com" className="text-2xl font-bold block hover:text-blue-600 transition-colors">hello@truemindlabs.com</a>
                  <a href="tel:+917004572140" className="text-2xl font-bold block hover:text-blue-600 transition-colors">+91 70045 72140</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS FOOTER --- */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Logo color="white" />
              <p className="mt-6 text-slate-400 max-w-sm">
                Truemind Labs builds high-performance Voice AI agents for businesses that can&apos;t afford missed opportunities. From Sahibganj to London, we automate the &quot;Mind-Work.&quot;
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Expertise</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link href="#services">Voice AI Follow-ups</Link></li>
                <li><Link href="#services">Intent Detection</Link></li>
                <li><Link href="#services">CRM Automations</Link></li>
                <li><Link href="#pricing">ROI Audits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link href="/about">Our Lab</Link></li>
                <li><Link href="/projects">Case Studies</Link></li>
                <li><Link href="/blog">AI for SMBs</Link></li>
                <li><Link href="#contact">Contact Sales</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com/company/truemind-labs" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter /></a>
            </div>
            <div className="text-slate-500 text-xs flex gap-6">
              <span>&copy; 2026 Truemind Labs.</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default LandingPage;