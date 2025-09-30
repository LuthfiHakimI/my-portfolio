// src/app/components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-xl p-4 z-50 border-b border-gray-700/30">
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-all duration-300 hover:scale-105">
          Luthfi Hakim.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#journey" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Journey
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-4 py-4 bg-gray-800/95 backdrop-blur-xl border-t border-gray-700/50">
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#journey" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full font-semibold transition-all duration-300 text-center">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}