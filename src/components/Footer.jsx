import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0e13] border-t border-[#32353b] py-16 text-[#c4c6cf]">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <span className="text-2xl text-[#e1e2ea] font-extrabold tracking-tight">
              rzkiahnval<span className="text-[#aec7f7]">.</span>
            </span>
            <p className="text-sm text-[#c4c6cf] max-w-md leading-relaxed">
              Mahasiswa Teknik Informatika yang berfokus pada pengembangan antarmuka web modern, eksplorasi sistem, dan kolaborasi proyek berbasis tim.
            </p>
            <div className="flex items-center gap-2 mt-2 font-mono text-xs text-[#8e9099]">
              <span className="w-2 h-2 rounded-full bg-[#aec7f7] animate-pulse"></span>
              <span>Based in Tasikmalaya, West Java, ID</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs text-[#aec7f7] uppercase tracking-wider mb-2">Navigation</span>
            <a href="#about" className="text-sm text-[#c4c6cf] hover:text-[#e1e2ea] transition-colors">About Overview</a>
            <a href="#tech-stack" className="text-sm text-[#c4c6cf] hover:text-[#e1e2ea] transition-colors">Tech Stack</a>
            <a href="#projects" className="text-sm text-[#c4c6cf] hover:text-[#e1e2ea] transition-colors">Featured Projects</a>
            <a href="#learning" className="text-sm text-[#c4c6cf] hover:text-[#e1e2ea] transition-colors">Certifications</a>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs text-[#aec7f7] uppercase tracking-wider mb-1">Direct Channels</span>
            <div className="flex items-center gap-3">
              {/* GitHub Link */}
              <a href="https://github.com/ryvlds" target="_blank" rel="noopener noreferrer" aria-label="Code Repository" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1d2025] hover:bg-[#1b365d] text-[#c4c6cf] hover:text-[#87a0cd] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* Instagram Link */}
              <a href="https://instagram.com/rzkiahnval__" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1d2025] hover:bg-[#1b365d] text-[#c4c6cf] hover:text-[#87a0cd] transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
              {/* Email Link */}
              <a href="mailto:ridzkiahnovalriana@gmail.com" aria-label="Direct Message" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1d2025] hover:bg-[#1b365d] text-[#c4c6cf] hover:text-[#87a0cd] transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <span className="text-xs text-[#8e9099] mt-2">ridzkiahnovalriana@gmail.com</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#32353b] gap-4 text-xs">
          <p className="text-[#8e9099] tracking-wider uppercase">© {new Date().getFullYear()} Ridzki Ahnovalrian Arifin. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[#8e9099]">STATUS: ONLINE [LATENCY 12MS]</span>
            <span className="w-2 h-2 rounded-full bg-[#aec7f7] animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}