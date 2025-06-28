import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNameClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNameClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [skillsClickCount, setSkillsClickCount] = useState(0);
  const [showWaterSplash, setShowWaterSplash] = useState(false);

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
        // Show splash effect
        setShowWaterSplash(true);
        // Reset counter after 5 seconds
        setTimeout(() => setSkillsClickCount(0), 5000);
        // Hide splash effect after 4 seconds
        setTimeout(() => setShowWaterSplash(false), 4000);
      }
      return newCount;
    });
  };

  const triggerYogurtSplash = () => {
    const waterEmojis = ['💧', '🌊', '💦', '🌊', '💧', '💦', '🌊', '💧'];
    
    // Create yogurt particles (white drops)
    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const drop = document.createElement('div');
        drop.className = 'yogurt-drop';
        
        // Random size for yogurt drops (larger than water drops)
        const size = Math.random() * 15 + 8;
        
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
          animation: yogurtSplash 3s ease-out forwards;
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
        `;
        
        // Random direction and distance (more spread out like yogurt spilling)
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 300 + 150;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        drop.style.setProperty('--end-x', `${endX}px`);
        drop.style.setProperty('--end-y', `${endY}px`);
        
        document.body.appendChild(drop);
        
        // Remove drop after animation
        setTimeout(() => {
          if (drop.parentNode) {
            drop.parentNode.removeChild(drop);
          }
        }, 3000);
      }, i * 15);
    }

    // Create water emoji particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const emoji = document.createElement('div');
        emoji.className = 'water-emoji';
        emoji.textContent = waterEmojis[Math.floor(Math.random() * waterEmojis.length)];
        
        emoji.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          font-size: ${Math.random() * 20 + 15}px;
          pointer-events: none;
          z-index: 10001;
          transform: translate(-50%, -50%);
          animation: emojiSplash 2.5s ease-out forwards;
          filter: brightness(1.2) contrast(1.1);
        `;
        
        // Random direction for emojis
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250 + 100;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        emoji.style.setProperty('--end-x', `${endX}px`);
        emoji.style.setProperty('--end-y', `${endY}px`);
        
        document.body.appendChild(emoji);
        
        // Remove emoji after animation
        setTimeout(() => {
          if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
          }
        }, 2500);
      }, i * 50);
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

      {/* Yogurt Splash Effect */}
      {showWaterSplash && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ 
            zIndex: 9998,
            pointerEvents: 'none'
          }}
        >
          <div className="text-center text-white">
            <div className="display-4 mb-3">🥛💧🌊</div>
            <div className="h5">Yogurt splash activated!</div>
            <div className="text-white-50">You found the hidden yogurt spill effect!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 