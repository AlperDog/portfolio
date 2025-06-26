import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Developer', 'Creator', 'Innovator', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="d-flex align-items-center min-vh-100" 
             style={{ 
               background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
               position: 'relative',
               overflow: 'hidden'
             }}>
      {/* Animated background particles */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              width: '4px',
              height: '4px',
              background: '#aa00ff',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-6 fade-in">
            <h1 className="display-3 fw-bold text-white mb-4">
              Hi, I'm <span style={{ color: '#aa00ff' }}>Alper</span>
            </h1>
            <h2 className="h3 text-white mb-4">
              A Creative{' '}
              <span 
                className="fw-bold"
                style={{ 
                  color: '#aa00ff',
                  minHeight: '2.5rem',
                  display: 'inline-block'
                }}
              >
                {words[currentWord]}
              </span>
            </h2>
            <p className="lead text-white-50 mb-5">
              Crafting digital experiences that are not only functional, 
              but fun and memorable. Let's build something amazing together!
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-custom" onClick={() => window.open('mailto:dogramacialper98@gmail.com', '_blank')}>
                <i className="fas fa-briefcase me-2"></i>
                Hire Me
              </button>
              <button className="btn btn-outline-light btn-lg" onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <i className="fas fa-folder me-2"></i>
                View Projects
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="float" style={{ fontSize: '8rem', color: '#aa00ff' }}>
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 2 }}>
        <div className="text-center text-white-50">
          <div className="mb-2">Scroll Down</div>
          <i className="fas fa-chevron-down" style={{ animation: 'float 2s ease-in-out infinite' }}></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 