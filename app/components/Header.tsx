"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '../logo.png';
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* <Bot className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} /> */}
              {/* <Image src={logo} alt="Truemind Labs" width={100} height={100} /> */}
   {/* <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Truemind Labs</span> */}
            <Logo color={isScrolled ? 'black' : 'white'} />
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Projects', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all">
              Get Started
            </button>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['Services', 'Projects', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Header;