import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DeployedProjects from './components/DeployedProjects';
import MiniGames from './components/MiniGames';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const handleNameClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        // Trigger confetti effect
        triggerConfetti();
        // Show toast
        setShowToast(true);
        // Reset counter after 3 seconds
        setTimeout(() => setClickCount(0), 3000);
      }
      return newCount;
    });
  };

  const triggerConfetti = () => {
    // Create a beautiful confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#aa00ff', '#ff00aa', '#00aaff', '#ffff00', '#00ff00', '#ff8800', '#8800ff'],
      shapes: ['circle', 'square'],
      gravity: 0.8,
      scalar: 1.2,
      drift: 0,
      ticks: 200
    });

    // Add a second burst for extra effect
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#aa00ff', '#ff00aa', '#00aaff', '#ffff00', '#00ff00'],
        shapes: ['circle', 'square'],
        gravity: 0.8,
        scalar: 1.2,
        drift: 0,
        ticks: 200
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#aa00ff', '#ff00aa', '#00aaff', '#ffff00', '#00ff00'],
        shapes: ['circle', 'square'],
        gravity: 0.8,
        scalar: 1.2,
        drift: 0,
        ticks: 200
      });
    }, 400);
  };

  return (
    <div className="App">
      <Navbar onNameClick={handleNameClick} />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <DeployedProjects />
        <MiniGames />
        <Contact />
      </main>
      <Footer />

      {/* Easter Egg Toast */}
      <div 
        className={`toast align-items-center text-white border-0 position-fixed top-0 end-0 m-3 ${showToast ? 'show' : ''}`}
        style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #aa00ff !important',
          zIndex: 9999,
          minWidth: '300px'
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body d-flex align-items-center">
            <i className="fas fa-star me-2" style={{ color: '#aa00ff' }}></i>
            <span className="fw-bold">You found the secret! This developer pays attention to detail.</span>
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white me-2 m-auto" 
            data-bs-dismiss="toast" 
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App; 