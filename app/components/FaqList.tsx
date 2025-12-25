"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most projects are deployed in 4-8 weeks. Simple chatbots can go live in 2-3 weeks, while complex multi-agent systems may take 8-12 weeks. We provide a detailed timeline during the discovery call.'
  },
  {
    question: 'What\'s the ROI and payback period?',
    answer: 'Our clients typically see 200-400% ROI within the first year. The payback period is usually 4-8 months depending on the use case. We provide a custom ROI assessment before you commit.'
  },
  {
    question: 'Do I need technical expertise to use AI agents?',
    answer: 'No! Our AI agents are designed to be user-friendly. We provide comprehensive training, documentation, and ongoing support. Your team can manage them without any coding knowledge.'
  },
  {
    question: 'How do you ensure data security and privacy?',
    answer: 'We follow enterprise-grade security standards including data encryption, secure APIs, compliance with GDPR/ISO standards, and regular security audits. Your data never leaves your infrastructure without permission.'
  },
  {
    question: 'Can AI agents integrate with our existing tools?',
    answer: 'Yes! We integrate with 100+ popular tools including CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), messaging platforms (WhatsApp, Slack), and custom systems via APIs.'
  },
  {
    question: 'What kind of support do you provide post-deployment?',
    answer: 'We offer 24/7 technical support, monthly performance reviews, continuous optimization, training sessions, and dedicated account managers for enterprise clients. All plans include maintenance and updates.'
  },
  {
    question: 'What if the AI makes mistakes?',
    answer: 'Our AI agents have 99%+ accuracy, but we always include human-in-the-loop fallbacks for critical decisions. We continuously monitor performance and improve the models based on real-world feedback.'
  },
  {
    question: 'Can we start with a pilot project?',
    answer: 'Absolutely! We recommend starting with a focused pilot (4-6 weeks) to prove ROI before scaling. This approach minimizes risk and helps you experience the value firsthand.'
  }
];

const FaqList = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="space-y-4">
    {faqs.map((faq, idx) => (
      <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all">
        <button
          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
          className="w-full px-8 py-6 flex justify-between items-center text-left"
        >
          <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
          <ChevronDown className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
        </button>
        {openFaq === idx && (
          <div className="px-8 pb-6">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default FaqList;