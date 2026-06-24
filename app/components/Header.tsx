"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { scrollToSection } from "../utils/scrollToSection";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    if (item === 'Case Studies') {
      // For now these can just scroll or link to placeholder paths
      // We will smooth scroll if on homepage
      setIsMenuOpen(false);
    }

    if (isHomePage) {
      e.preventDefault();
      // Map menu items to section IDs
      const sectionId = item.toLowerCase().replace(' ', '-');
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const navLinks = ['Products', 'Case Studies', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-[#020617]/80 backdrop-blur-md border-slate-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold font-mono text-white tracking-tight flex items-center">
              truemindlabs<span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse ml-1">_</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <Link
                key={item} 
                href={`/#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </Link>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hidden md:flex items-center gap-2 border border-cyan-500/50 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-500/10 transition-all text-sm font-bold"
            >
              Work with us <span className="font-mono">→</span>
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#020617] border-b border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item} 
                href={`/#${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-slate-300 hover:text-cyan-400 font-medium"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
              className="w-full border border-cyan-500 text-cyan-400 px-5 py-3 rounded-lg flex justify-center items-center gap-2 font-bold mt-4"
            >
              Work with us <span className="font-mono">→</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;