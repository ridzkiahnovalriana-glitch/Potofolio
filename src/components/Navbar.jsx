import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#101319]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.4)] border-b border-[#32353b]">
      <div className="h-16 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-xl tracking-tighter text-[#e1e2ea] font-extrabold group-hover:text-[#aec7f7] transition-colors">
              rzkiahnval<span className="text-[#aec7f7]">.</span>
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 transition-colors text-xs font-medium rounded-lg ${
                idx === 0 
                  ? 'text-[#e1e2ea] bg-[#1d2025] font-semibold' 
                  : 'text-[#c4c6cf] hover:text-[#e1e2ea] hover:bg-[#272a30]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Hamburger Button */}
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-[#e1e2ea] bg-[#0b0e13] hover:bg-[#1b365d] hover:text-[#87a0cd] transition-all rounded-lg border border-[#32353b]"
          >
            <span className="mr-2">⚡</span> Let's Talk
          </a>

          {/* Profile Photo */}
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#aec7f7]/40 bg-[#0b0e13] shadow-md flex items-center justify-center">
            <img 
              src="/assets/ridzki.jpeg" 
              alt="Ridzki Ahnovalrian Arifin" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hamburger Toggle Button (Mobile/Tablet) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1d2025] border border-[#32353b] text-[#e1e2ea] hover:text-[#aec7f7] focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#101319] border-b border-[#32353b] shadow-2xl px-4 py-6 flex flex-col gap-2 transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#c4c6cf] hover:text-[#e1e2ea] hover:bg-[#1d2025] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-[#32353b] flex items-center justify-between px-2">
            <span className="text-xs font-mono text-[#8e9099]">STATUS: ACTIVE</span>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-[#aec7f7]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}