import React, { useState, useEffect, useMemo } from 'react';

const words = [
  'Full-Stack Developer',
  'React Specialist',
  'TypeScript Expert',
  'Problem Solver',
];

// Night sky particle configuration
const NUM_STARS = 80; // Main bright stars
const NUM_TWINKLE_STARS = 120; // Smaller twinkling stars
const NUM_DUST_PARTICLES = 200; // Very small dust particles

const HeroSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Memoize random particle styles so they don't change on every render
  const particles = useMemo(() => {
    const allParticles = [];
    
    // Generate main bright stars
    for (let i = 0; i < NUM_STARS; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 2 + Math.random() * 3; // 2-5px
      const duration = 4 + Math.random() * 3; // 4-7s
      const delay = Math.random() * 4; // 0-4s
      const brightness = 0.7 + Math.random() * 0.3; // 0.7-1.0
      allParticles.push({ 
        left, top, size, duration, delay, brightness, 
        type: 'star',
        color: Math.random() > 0.8 ? '#ffffff' : '#aa00ff' // 20% white, 80% purple
      });
    }
    
    // Generate twinkling stars
    for (let i = 0; i < NUM_TWINKLE_STARS; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 1 + Math.random() * 2; // 1-3px
      const duration = 2 + Math.random() * 2; // 2-4s
      const delay = Math.random() * 3; // 0-3s
      const brightness = 0.4 + Math.random() * 0.4; // 0.4-0.8
      allParticles.push({ 
        left, top, size, duration, delay, brightness, 
        type: 'twinkle',
        color: Math.random() > 0.7 ? '#ffffff' : '#aa00ff' // 30% white, 70% purple
      });
    }
    
    // Generate dust particles
    for (let i = 0; i < NUM_DUST_PARTICLES; i++) {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 0.5 + Math.random() * 1; // 0.5-1.5px
      const duration = 6 + Math.random() * 4; // 6-10s
      const delay = Math.random() * 5; // 0-5s
      const brightness = 0.2 + Math.random() * 0.3; // 0.2-0.5
      allParticles.push({ 
        left, top, size, duration, delay, brightness, 
        type: 'dust',
        color: Math.random() > 0.6 ? '#ffffff' : '#aa00ff' // 40% white, 60% purple
      });
    }
    
    return allParticles;
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`hero-particle hero-particle-${p.type}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.brightness,
              backgroundColor: p.color,
              animation: p.type === 'twinkle' 
                ? `twinkle ${p.duration}s ease-in-out infinite` 
                : `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-main">
          <h1>
            Hi, I'm <span className="hero-highlight">Alper</span>
          </h1>
          <h2>
            <span className="hero-subtitle-static">A</span>
            <span className="hero-subtitle-dynamic">{words[currentWord]}</span>
          </h2>
          <p>
            Building scalable web applications with modern technologies.<br />
            Specialized in React, TypeScript, and full-stack development.
          </p>
          <div className="hero-badges">
            <span className="badge react">React</span>
            <span className="badge ts">TypeScript</span>
            <span className="badge node">Node.js</span>
            <span className="badge fullstack">Full-Stack</span>
          </div>
          <div className="hero-actions">
            <a
              href="https://www.linkedin.com/in/dogramacialper/"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-briefcase"></i> Hire Me
            </a>
            <a
              href="https://github.com/AlperDog?tab=repositories"
              className="btn outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          {/* Show symbol below buttons on mobile only */}
          <div className="hero-symbol-mobile">
            <span className="hero-symbol">&lt;/&gt;</span>
          </div>
        </div>
        {/* Show symbol in right column on desktop only */}
        <div className="hero-symbol-container">
          <span className="hero-symbol">&lt;/&gt;</span>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default HeroSection; 