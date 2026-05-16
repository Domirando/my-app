import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LINKS = [
  { hash: 'hero',       label: 'Home',       idx: 0 },
  { hash: 'about',      label: 'About',      idx: 1 },
  { hash: 'skills',     label: 'Skills',     idx: 2 },
  { hash: 'education',  label: 'Education',  idx: 3 },
  { hash: 'experience', label: 'Experience', idx: 4 },
  { hash: 'contact',    label: 'Contact',    idx: 5 },
];

function scrollTo(idx) {
  const root = document.getElementById('scroll-root');
  if (root) {
    root.scrollTo({ top: idx * window.innerHeight, behavior: 'smooth' });
  }
}

export default function Nav() {
  const { hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeHash = hash.replace('#', '') || 'hero';

  useEffect(() => {
    const root = document.getElementById('scroll-root');
    const onScroll = () => setScrolled((root ? root.scrollTop : window.scrollY) > 40);
    const target = root || window;
    target.addEventListener('scroll', onScroll, { passive: true });
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="app-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-white/5 shadow-lg shadow-black/20' : ''
      }`}
      style={{ background: scrolled ? 'rgba(6,6,20,0.85)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo(0)}
          className="text-xl font-black gradient-text tracking-widest select-none bg-transparent border-0 cursor-pointer"
        >
          Domirando
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(link => (
            <button
              key={link.hash}
              onClick={() => { scrollTo(link.idx); setMenuOpen(false); }}
              className="text-sm tracking-wide bg-transparent border-0 cursor-pointer transition-all duration-200"
              style={{ color: activeHash === link.hash ? '#a855f7' : '#94a3b8' }}
            >
              {activeHash === link.hash && (
                <span className="mr-1.5 text-xs text-purple-400">✦</span>
              )}
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo(5)}
            className="px-5 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer"
            style={{
              border: '1px solid rgba(168,85,247,0.4)',
              color: '#c084fc',
              background: 'transparent',
            }}
            onMouseEnter={e => (e.target.style.background = 'rgba(168,85,247,0.1)')}
            onMouseLeave={e => (e.target.style.background = 'transparent')}
          >
            Hire Me ✦
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-white/5 px-6 py-4" style={{ background: 'rgba(6,6,20,0.95)' }}>
          {LINKS.map(link => (
            <button
              key={link.hash}
              onClick={() => { scrollTo(link.idx); setMenuOpen(false); }}
              className="block w-full text-left py-3 border-b border-white/5 last:border-0 bg-transparent cursor-pointer transition-colors"
              style={{ color: activeHash === link.hash ? '#a855f7' : '#94a3b8', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
