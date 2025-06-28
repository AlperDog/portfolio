import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNameClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNameClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on nav link click (mobile UX)
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleTogglerClick = () => {
    setMenuOpen((open) => !open);
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
            onClick={handleTogglerClick}
            aria-expanded={menuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse${menuOpen ? ' show custom-mobile-navbar' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home" onClick={handleNavLinkClick}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about" onClick={handleNavLinkClick}>About</a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link text-white" 
                  href="#skills"
                  onClick={handleNavLinkClick}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#deployed-projects" onClick={handleNavLinkClick}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact" onClick={handleNavLinkClick}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 