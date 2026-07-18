'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0b0f19]/70 backdrop-blur-md border-b border-gray-800/50 py-4 shadow-lg shadow-[#0077b6]/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => handleScrollTo(e, 'hero')} className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-[#00b4d8] bg-clip-text text-transparent">
          N&M <span className="text-[#ffb703]">.</span>
        </a>
        
        <nav className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium">
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="text-gray-400 hover:text-[#00b4d8] transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="text-gray-400 hover:text-[#00b4d8] transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="text-gray-400 hover:text-[#00b4d8] transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="bg-[#0b0f19]/40 hover:bg-[#0077b6]/20 text-gray-200 hover:text-white px-4 py-1.5 rounded-full border border-gray-800 hover:border-[#00b4d8]/50 backdrop-blur-sm transition-all text-xs">
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
