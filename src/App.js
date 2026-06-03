import React, { useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';

import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Writing from './Writing';
import DigitalHuman from './DigitalHuman';
import BackgroundMusic from './BackgroundMusic';

const SECTIONS = ['hero', 'about', 'skills', 'education', 'experience', 'writing', 'contact'];

function HashScrollInit() {
  const { hash } = useLocation();
  useEffect(() => {
    const idx = SECTIONS.indexOf(hash.replace('#', ''));
    if (idx > 0) {
      setTimeout(() => {
        const root = document.getElementById('scroll-root');
        if (root) root.scrollTo({ top: idx * window.innerHeight, behavior: 'smooth' });
      }, 80);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navigate(`#${entry.target.id}`, { replace: true });
          }
        });
      },
      { root: document.getElementById('scroll-root'), threshold: 0.5 }
    );

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <div
      id="scroll-root"
      style={{
        background: '#060614',
        color: '#f1f5f9',
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <HashScrollInit />
      <Nav />

      <section id="hero" style={{ height: '100vh' }}>
        <Hero />
      </section>

      <section id="about" style={{ height: '100vh' }}>
        <About />
      </section>

      <section id="skills" style={{ height: '100vh' }}>
        <Skills />
      </section>

      <section id="education" style={{ height: '100vh' }}>
        <Education />
      </section>

      <section id="experience" style={{ height: '100vh' }}>
        <Experience />
      </section>

      <section id="writing" style={{ height: '100vh' }}>
        <Writing />
      </section>

      <section id="contact" style={{ height: '100vh' }}>
        <Contact />
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#475569', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="gradient-text" style={{ fontWeight: 700 }}>Domirando</span>
        {' · '}Maftuna Vohidjonovna{' · '}© 2021–{new Date().getFullYear()}
      </footer>

      <BackgroundMusic />
      <DigitalHuman />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}
