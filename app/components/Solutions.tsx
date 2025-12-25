'use client';
import { Bot, Database, ShoppingCart, Users, Target, BarChart3, MessageSquare, Briefcase, Brain, Code, CheckCircle, Clock, Building2 } from "lucide-react";
import { useState } from "react";

const categories = ['All', 'E-Commerce', 'FinTech', 'Sales & Marketing', 'HR & Recruitment', 'Customer Service', 'Analytics', 'Marketing', 'Operations', 'Legal Tech', 'SaaS Platform'];
const projects = [
  {
    id: 1,
    title: 'E-Commerce AI Assistant',
    category: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Intelligent chatbot handling 10K+ daily queries with 85% automation rate',
    technologies: ['GPT-4', 'Python', 'React', 'AWS'],
    results: ['85% query automation', '₹18L annual savings', '40% CSAT increase'],
    image: '🛒',
    color: 'from-blue-500 to-cyan-500',
    duration: '6 weeks',
    client: 'Major Retail Chain'
  },
  {
    id: 2,
    title: 'Financial Document Processor',
    category: 'FinTech',
    icon: Database,
    description: 'AI-powered invoice extraction and payment reconciliation system',
    technologies: ['OCR', 'NLP', 'Node.js', 'MongoDB'],
    results: ['5 days → 4 hours', '99.8% accuracy', '₹12L saved/year'],
    image: '💰',
    color: 'from-green-500 to-emerald-500',
    duration: '8 weeks',
    client: 'FinTech Startup'
  },
  {
    id: 3,
    title: 'Sales Lead Qualification Bot',
    category: 'Sales & Marketing',
    icon: Target,
    description: 'Automated lead scoring, qualification, and meeting scheduling',
    technologies: ['AI/ML', 'CRM Integration', 'TypeScript'],
    results: ['4x qualified meetings', '30% shorter cycle', '₹25L revenue'],
    image: '🎯',
    color: 'from-purple-500 to-pink-500',
    duration: '5 weeks',
    client: 'SaaS Platform'
  },
  {
    id: 4,
    title: 'HR Recruitment Automation',
    category: 'HR & Recruitment',
    icon: Users,
    description: 'Resume screening, candidate matching, and interview scheduling',
    technologies: ['NLP', 'Python', 'REST APIs', 'PostgreSQL'],
    results: ['70% time saved', '3x more candidates', '₹8L saved/year'],
    image: '👥',
    color: 'from-orange-500 to-red-500',
    duration: '7 weeks',
    client: 'Tech Company'
  },
  {
    id: 5,
    title: 'Customer Support Chatbot',
    category: 'Customer Service',
    icon: MessageSquare,
    description: '24/7 multilingual support with sentiment analysis and escalation',
    technologies: ['GPT-4', 'Sentiment AI', 'React', 'WebSocket'],
    results: ['90% first contact resolution', '24/7 availability', '₹15L savings'],
    image: '💬',
    color: 'from-indigo-500 to-purple-500',
    duration: '6 weeks',
    client: 'Healthcare Provider'
  },
  {
    id: 6,
    title: 'Business Intelligence Dashboard',
    category: 'Analytics',
    icon: BarChart3,
    description: 'AI-powered data analytics with predictive insights and reporting',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    results: ['Real-time insights', '50% faster decisions', '₹20L impact'],
    image: '📊',
    color: 'from-teal-500 to-green-500',
    duration: '10 weeks',
    client: 'Manufacturing Firm'
  },
  {
    id: 7,
    title: 'Content Generation Platform',
    category: 'Marketing',
    icon: Brain,
    description: 'AI-powered content creation for blogs, social media, and ads',
    technologies: ['GPT-4', 'DALL-E', 'Next.js', 'Supabase'],
    results: ['10x content output', '80% time saved', '₹10L saved/year'],
    image: '✍️',
    color: 'from-pink-500 to-rose-500',
    duration: '5 weeks',
    client: 'Digital Agency'
  },
  {
    id: 8,
    title: 'Supply Chain Optimizer',
    category: 'Operations',
    icon: Briefcase,
    description: 'Predictive inventory management and logistics optimization',
    technologies: ['ML Models', 'Python', 'React', 'Redis'],
    results: ['30% cost reduction', '95% accuracy', '₹30L saved/year'],
    image: '📦',
    color: 'from-yellow-500 to-orange-500',
    duration: '12 weeks',
    client: 'Logistics Company'
  },
  {
    id: 9,
    title: 'Legal Document Analyzer',
    category: 'Legal Tech',
    icon: Code,
    description: 'Contract analysis, clause extraction, and compliance checking',
    technologies: ['NLP', 'BERT', 'Vue.js', 'Elasticsearch'],
    results: ['90% faster review', '99% accuracy', '₹22L saved/year'],
    image: '⚖️',
    color: 'from-gray-600 to-gray-800',
    duration: '9 weeks',
    client: 'Law Firm'
  },
  {
    id: 10,
    title: 'Chat Agent Pro - Free Universal Chatbot',
    category: 'SaaS Platform',
    icon: Bot,
    description: 'One chatbot for ALL use cases: E-commerce, Support, Appointments, Tickets, Lead Gen. Free forever. DM for customization!',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AI/ML'],
    results: ['100% Free Forever', 'Any Business Use Case', 'Custom Integrations Available'],
    image: '🤖',
    color: 'from-blue-600 to-purple-600',
    duration: 'Free to Use',
    client: 'Open for All Businesses'
  }
];

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    
  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
          >
            {/* Project Header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
            
            <div className="p-6">
              {/* Icon and Emoji */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-4xl">{project.image}</span>
              </div>

              {/* Title and Category */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  <span>{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show message if no projects in category */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      )}

    </>
  )
}

export default Solutions;