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
  // 1. Check if we are on the Home page
  const isHomePage = pathname === '/';
  
  // 2. Check if the top of the page has a dark background (Home and Blog List)
  const hasDarkHero = isHomePage || pathname === '/blog';
  
  // 3. Force dark text/background if we are scrolled OR if the page has a white top (like individual blog posts)
  const useDarkTheme = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    if (item === 'Blog') {
      setIsMenuOpen(false);
      return; // Let Next.js Link handle the navigation to /blog
    }

    if (isHomePage) {
      // If we are already on the home page, smooth scroll to the section
      e.preventDefault();
      scrollToSection(item);
    }
    // If we are NOT on the home page, we do NOT prevent default.
    // This allows <Link href="/#services"> to navigate back to the home page and jump to the section!
    setIsMenuOpen(false);
  };

  return (<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Bot className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} /> */}
              {/* <Image src={logo} alt="Truemind Labs" width={100} height={100} /> */}
   {/* <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Truemind Labs</span> */}
            <Logo color={isScrolled ? 'black' : 'white'} />
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Projects', 'Pricing',
              //  'FAQ', 
               'Blog', 'Contact'].map((item) => (
                <Link
                  key={item} 
                  href={item === 'Blog'?'/blog':`/#${item.toLowerCase().replace(' ', '-')}`} 
                  className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </Link>
              ))}
            </div>

            <button onClick={()=>scrollToSection('contact')} className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all">
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
              {['Services', 'Projects', 'Pricing', 
              // 'FAQ', 
              'Blog', 'Contact'].map((item) => (
                <Link
                  key={item} 
                  href={item === 'Blog'?'/blog':`/#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </Link>
              ))}
              <button onClick={()=>scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Header;