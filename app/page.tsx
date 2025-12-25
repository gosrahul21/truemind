
import { Bot, Users, CheckCircle, Clock, DollarSign, BarChart3, MessageSquare, Mail, Building2, Rocket, Target, Code, Database, ShoppingCart, Brain, Briefcase, Zap, Phone, Star, TrendingUp, ArrowRight, Linkedin, Twitter, Form } from 'lucide-react';
import Header from './components/Header';
import FaqList from './components/FaqList';
import CategoryFilter from './components/CategoryFilter';
import Solutions from './components/Solutions';
const LandingPage = () => {

  const services = [
    {
      icon: MessageSquare,
      title: 'Customer Service Automation',
      description: 'AI chatbots that handle 80% of customer inquiries instantly, 24/7',
      savings: 'Save ₹10-15L annually'
    },
    {
      icon: Users,
      title: 'Sales & Lead Qualification',
      description: 'Automatically qualify leads, schedule meetings, and nurture prospects',
      savings: '3x conversion rate'
    },
    {
      icon: BarChart3,
      title: 'Data Processing & Entry',
      description: 'Extract, validate, and process documents with 99% accuracy',
      savings: '90% time reduction'
    },
    {
      icon: Mail,
      title: 'Email & Communication',
      description: 'Smart email routing, auto-responses, and follow-up management',
      savings: '20hrs/week saved'
    },
    {
      icon: Clock,
      title: 'HR & Recruitment',
      description: 'Screen resumes, conduct initial interviews, schedule candidates',
      savings: 'Save ₹6-10L annually'
    },
    {
      icon: DollarSign,
      title: 'Invoice & Finance',
      description: 'Automate invoice processing, payment reconciliation, and reporting',
      savings: '95% accuracy boost'
    }
  ];

  const stats = [
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Happy Clients' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechCorp India',
      content: 'Our customer service costs dropped by 60% while satisfaction scores increased. The AI agents are incredible!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head, RetailMax',
      content: 'Invoice processing that took 3 days now takes 2 hours. ROI achieved in just 4 months.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Founder, StartupHub',
      content: 'The AI agents handle lead qualification better than our sales team. Game-changer for our business.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹4L',
      period: 'one-time',
      features: [
        'Single AI Agent',
        'Basic Integrations',
        'Email Support',
        '3 Months Maintenance',
        'Training Included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹12L',
      period: 'one-time',
      features: [
        'Multiple AI Agents',
        'Advanced Integrations',
        'Priority Support',
        '6 Months Maintenance',
        'Custom Development',
        'Monthly Optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited Agents',
        'Full Customization',
        'Dedicated Support Team',
        '12 Months Maintenance',
        'SLA Guarantee',
        'White-label Options'
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      icon: Building2,
      company: 'E-commerce Giant',
      industry: 'Retail',
      challenge: 'Handling 10,000+ daily customer queries with limited support team',
      solution: 'Deployed AI chatbot for tier-1 support, automated order tracking & returns',
      results: [
        '85% queries resolved instantly',
        '₹18L annual savings',
        '40% increase in CSAT score',
        'Support team scaled 5x without hiring'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      company: 'FinTech Startup',
      industry: 'Finance',
      challenge: 'Manual invoice processing taking 5 days, causing payment delays',
      solution: 'AI-powered document extraction, validation & payment reconciliation',
      results: [
        '5 days → 4 hours processing time',
        '99.8% accuracy rate',
        '₹12L saved in first year',
        'Zero payment delays'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      company: 'SaaS Platform',
      industry: 'Technology',
      challenge: 'Sales team spending 60% time on lead qualification',
      solution: 'AI agent for lead scoring, qualification & meeting scheduling',
      results: [
        '4x more qualified meetings',
        '30% shorter sales cycle',
        '₹25L additional revenue',
        'Sales team focused on closing'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // const filteredProjects = selectedCategory === 'All' 
  //   ? projects 
  //   : projects.filter(project => project.category === selectedCategory);


  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission - integrate with your backend/email service
  //   console.log('Form submitted:', formData);
  //   alert('Thank you! We\'ll contact you within 24 hours.');
  //   setFormData({ name: '', email: '', phone: '', company: '', message: '', budget: '' });
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Automate Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">AI Agents</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Save 70% on operational costs. Scale without limits. Let AI handle the repetitive work while your team focuses on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
                See How It Works
              </button>
            </div>
            <div className="mt-12 flex justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Free ROI Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tool Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-4">
              🎁 FREE TOOL - ONE CHATBOT FOR ALL USE CASES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Chat Agent Pro - Your Universal AI Assistant
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              One powerful chatbot platform for ALL your business needs: E-commerce, Customer Support, Appointment Booking, Ticket Management, and more. Built with ₹10L+ enterprise technology - yours to use completely FREE.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">🛒 E-commerce</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">💬 Customer Support</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">📅 Appointment Booking</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">🎫 Ticket Management</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">📊 Lead Generation</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">🔧 Any Custom Use Case</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Bot className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-Purpose Chatbots</h3>
              <p className="text-white/80">Create chatbots for ANY business requirement - no coding needed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <MessageSquare className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Document AI Training</h3>
              <p className="text-white/80">Upload your documents and train chatbots on your business data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Free Forever</h3>
              <p className="text-white/80">No credit card, no hidden fees, no limitations on use cases</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl mb-4 inline-flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Launch Chat Agent Pro Free
            </button>
            <p className="text-white/90 text-sm max-w-2xl mx-auto mb-6">
              Works for ANY business requirement • Try it free, DM us for customization
            </p>
          </div>

          {/* Need Customization CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border-2 border-white/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Need Custom Integration or Features?</h3>
              <p className="text-white/90 mb-6">
                Love the free tool but need WhatsApp integration, CRM sync, custom workflows, or white-label solutions? We&apos;ve got you covered!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  DM for Customization
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Automate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your operations with AI agents that work 24/7, never make mistakes, and scale instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-green-600 font-semibold text-lg">💰 {service.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Need More? We Customize Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Love our free chatbot? We can take it further with enterprise integrations and custom features tailored to your exact needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Integration</h3>
              <p className="text-gray-600 text-sm mb-3">Connect your chatbot to WhatsApp Business API for seamless customer engagement</p>
              <p className="text-purple-600 font-semibold text-sm">From ₹1.5L</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-green-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CRM & Tool Sync</h3>
              <p className="text-gray-600 text-sm mb-3">Integrate with Salesforce, HubSpot, Zoho, or any custom CRM system</p>
              <p className="text-green-600 font-semibold text-sm">From ₹2L</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Workflows</h3>
              <p className="text-gray-600 text-sm mb-3">Build complex automation workflows specific to your business processes</p>
              <p className="text-orange-600 font-semibold text-sm">From ₹3L</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all border-2 border-pink-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">White-Label Solution</h3>
              <p className="text-gray-600 text-sm mb-3">Rebrand the entire platform with your logo, colors, and custom domain</p>
              <p className="text-pink-600 font-semibold text-sm">From ₹5L</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-3xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Customize Your Chatbot?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you need simple integrations or a fully custom AI solution, we&apos;re here to help. Let&apos;s discuss your requirements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                DM Us for Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Simple, fast, and effective automation in 4 steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Discovery Call', desc: 'We analyze your workflows and identify automation opportunities', icon: MessageSquare },
              { num: '2', title: 'Custom Design', desc: 'Create AI agents tailored to your specific business needs', icon: Bot },
              { num: '3', title: 'Quick Deploy', desc: 'Seamless integration with your existing systems in 4-8 weeks', icon: Zap },
              { num: '4', title: 'Continuous Optimization', desc: 'Monitor, improve, and scale performance over time', icon: TrendingUp }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real transformations from companies like yours</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center mb-6`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.company}</h3>
                    <span className="text-sm text-blue-600 font-semibold">{study.industry}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-xl">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of AI automation solutions delivered across industries
            </p>
          </div>

         <Solutions/>
          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have a project in mind? Let&apos;s discuss how we can help.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Investment Plans
            </h2>
            <p className="text-xl text-gray-600">Choose the perfect solution for your business size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-2xl p-8 ${plan.popular ? 'border-4 border-blue-500 transform scale-105 shadow-2xl' : 'border-2 border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about AI automation</p>
          </div>

          <div className="space-y-4">
            <FaqList />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let&apos;s Build Your AI Solution
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a free consultation and get a custom ROI assessment worth ₹50,000
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Free ROI Assessment</h3>
                    <p className="text-gray-600">We&apos;ll analyze your workflows and calculate potential savings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Custom Demo</h3>
                    <p className="text-gray-600">See AI agents in action tailored to your use case</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">No Obligation</h3>
                    <p className="text-gray-600">Zero pressure, just valuable insights for your business</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:hello@truemindlabs.com" className="text-gray-700 hover:text-blue-600">hello@truemindlabs.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+919876543210" className="text-gray-700 hover:text-blue-600">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
        <Form />
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on AI Automation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get weekly insights, case studies, and automation tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 5,000+ business leaders. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join 50+ companies already saving millions with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Truemind Labs</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses with intelligent AI automation solutions.
              </p>
              <div className="flex space-x-4 mt-6">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Customer Service AI</li>
                <li className="hover:text-white cursor-pointer">Sales Automation</li>
                <li className="hover:text-white cursor-pointer">Data Processing</li>
                <li className="hover:text-white cursor-pointer">HR Automation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Case Studies</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@truemindlabs.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </li>
                <li>
                  Kolkata, West Bengal, India
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Truemind Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;