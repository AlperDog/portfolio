import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNameClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNameClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [skillsClickCount, setSkillsClickCount] = useState(0);
  const [showOopsText, setShowOopsText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkillsClick = () => {
    setSkillsClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 31) {
        // Trigger yogurt splash effect
        triggerYogurtSplash();
        // Show OOPS text
        setShowOopsText(true);
        // Reset counter after 15 seconds
        setTimeout(() => setSkillsClickCount(0), 15000);
        // Hide OOPS text after 10 seconds
        setTimeout(() => setShowOopsText(false), 10000);
      }
      return newCount;
    });
  };

  const triggerYogurtSplash = () => {
    const waterEmojis = ['💧', '🌊', '💦', '🌊', '💧', '💦', '🌊', '💧'];
    
    // Create yogurt particles (white drops) - bigger and more
    for (let i = 0; i < 120; i++) {
      setTimeout(() => {
        const drop = document.createElement('div');
        drop.className = 'yogurt-drop';
        
        // Much bigger size for yogurt drops
        const size = Math.random() * 30 + 15;
        
        drop.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.4) 80%, transparent 100%);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          animation: yogurtSplash 10s ease-out forwards;
          box-shadow: 0 0 15px rgba(255,255,255,0.4);
        `;
        
        // Much larger spread to cover more screen
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 600 + 200;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        drop.style.setProperty('--end-x', `${endX}px`);
        drop.style.setProperty('--end-y', `${endY}px`);
        
        document.body.appendChild(drop);
        
        // Keep particles on screen for 10 seconds
        setTimeout(() => {
          if (drop.parentNode) {
            drop.parentNode.removeChild(drop);
          }
        }, 10000);
      }, i * 25); // Slower particle creation
    }

    // Create water emoji particles - bigger and more
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const emoji = document.createElement('div');
        emoji.className = 'water-emoji';
        emoji.textContent = waterEmojis[Math.floor(Math.random() * waterEmojis.length)];
        
        emoji.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          font-size: ${Math.random() * 35 + 20}px;
          pointer-events: none;
          z-index: 10001;
          transform: translate(-50%, -50%);
          animation: emojiSplash 10s ease-out forwards;
          filter: brightness(1.2) contrast(1.1);
        `;
        
        // Larger spread for emojis
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 500 + 150;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        emoji.style.setProperty('--end-x', `${endX}px`);
        emoji.style.setProperty('--end-y', `${endY}px`);
        
        document.body.appendChild(emoji);
        
        // Keep emojis on screen for 10 seconds
        setTimeout(() => {
          if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
          }
        }, 10000);
      }, i * 80); // Slower emoji creation
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`} 
           style={{
             backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.95)' : 'transparent',
             backdropFilter: isScrolled ? 'blur(10px)' : 'none',
             transition: 'all 0.3s ease',
             borderBottom: isScrolled ? '1px solid rgba(170, 0, 255, 0.2)' : 'none'
           }}>
        <div className="container">
          <a 
            className="navbar-brand text-white fw-bold fs-4" 
            href="#home"
            onClick={onNameClick}
            style={{ 
              cursor: 'pointer',
              position: 'relative'
            }}
            title="Click me 5 times for a surprise! 🎉"
          >
            Alper Doğramacı
            <span 
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '6px',
                height: '6px',
                backgroundColor: '#aa00ff',
                borderRadius: '50%',
                opacity: 0.6,
                animation: 'pulse 2s infinite'
              }}
            ></span>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            style={{ border: '1px solid rgba(170, 0, 255, 0.3)' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link text-white" 
                  href="#skills"
                  onClick={handleSkillsClick}
                  style={{ cursor: 'pointer' }}
                  title="Click me 31 times for a yogurt splash! 🥛💧"
                >
                  Skills
                  {skillsClickCount > 0 && skillsClickCount < 31 && (
                    <span 
                      style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        opacity: 0.8,
                        animation: 'pulse 1s infinite'
                      }}
                    ></span>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#deployed-projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* OOPS Text */}
      {showOopsText && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ 
            zIndex: 9998,
            pointerEvents: 'none'
          }}
        >
          <div className="text-center text-white">
            <div className="display-1 fw-bold mb-0" style={{ 
              fontSize: '8rem',
              textShadow: '0 0 30px rgba(255,255,255,0.8)',
              animation: 'pulse 0.5s ease-in-out infinite'
            }}>
              OOPS!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 