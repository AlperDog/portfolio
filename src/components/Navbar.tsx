import React, { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#deployed-projects' },
  { label: 'Contact', href: '#contact' },
];

const confettiColors = [
  '#ff3b3b', '#ffb300', '#ffe600', '#00e676', '#00b8ff', '#2979ff', '#aa00ff', '#ff00cc', '#ff5e00', '#fff', '#222'
];
const confettiShapes = ['circle', 'rect', 'star'];
const partyEmojis = ['🎉', '🥳', '🎊', '✨'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const confettiTimeout = useRef<NodeJS.Timeout | null>(null);
  const secretTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  // Celebration confetti + notification
  useEffect(() => {
    if (logoClickCount === 5) {
      triggerCelebrationConfetti();
      setShowSecret(true);
      confettiTimeout.current = setTimeout(() => setLogoClickCount(0), 4000);
      secretTimeout.current = setTimeout(() => setShowSecret(false), 3200);
    }
    return () => {
      if (confettiTimeout.current) clearTimeout(confettiTimeout.current);
      if (secretTimeout.current) clearTimeout(secretTimeout.current);
    };
  }, [logoClickCount]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLogoClickCount((c) => (c < 5 ? c + 1 : 1));
  };

  const triggerCelebrationConfetti = () => {
    const numConfetti = 100;
    for (let i = 0; i < numConfetti; i++) {
      setTimeout(() => {
        // Randomize spawn point within ±40px of center
        const spawnOffsetX = (Math.random() - 0.5) * 80; // -40px to +40px
        const spawnOffsetY = (Math.random() - 0.5) * 80; // -40px to +40px
        const angle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 180;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance + 80; // gravity effect
        const size = Math.random() * 16 + 16;
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        const confetti = document.createElement('div');
        confetti.className = 'celebration-confetti';
        confetti.style.cssText = `
          position: fixed;
          top: calc(50vh + ${spawnOffsetY}px);
          left: calc(50vw + ${spawnOffsetX}px);
          width: ${size}px;
          height: ${size}${shape === 'rect' ? 'px' : ''};
          background: ${shape !== 'star' ? color : 'none'};
          color: ${color};
          border-radius: ${shape === 'circle' ? '50%' : shape === 'rect' ? '6px' : '0'};
          opacity: 0.93;
          z-index: 9999;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1) rotate(${Math.random() * 360}deg);
          animation: celebration-burst 0.7s cubic-bezier(.62,.01,.27,1) forwards;
          --dx: ${x}px;
          --dy: ${y}px;
        `;
        if (shape === 'star') {
          confetti.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="${color}" xmlns="http://www.w3.org/2000/svg"><polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"/></svg>`;
        }
        document.body.appendChild(confetti);
        setTimeout(() => {
          if (confetti.parentNode) confetti.parentNode.removeChild(confetti);
        }, 800);
      }, i * 4);
    }
    // Party emojis
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const spawnOffsetX = (Math.random() - 0.5) * 80;
        const spawnOffsetY = (Math.random() - 0.5) * 80;
        const emoji = document.createElement('div');
        emoji.className = 'celebration-emoji';
        emoji.textContent = partyEmojis[Math.floor(Math.random() * partyEmojis.length)];
        const angle = Math.random() * 2 * Math.PI;
        const distance = 60 + Math.random() * 120;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 40; // float up
        const size = Math.random() * 18 + 28;
        emoji.style.cssText = `
          position: fixed;
          top: calc(50vh + ${spawnOffsetY}px);
          left: calc(50vw + ${spawnOffsetX}px);
          font-size: ${size}px;
          z-index: 10000;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(1) rotate(${Math.random() * 360}deg);
          animation: celebration-emoji-float 1.2s cubic-bezier(.62,.01,.27,1) forwards;
          --dx: ${x}px;
          --dy: ${y}px;
        `;
        document.body.appendChild(emoji);
        setTimeout(() => {
          if (emoji.parentNode) emoji.parentNode.removeChild(emoji);
        }, 1300);
      }, i * 30);
    }
  };

  return (
    <>
      <nav className={`custom-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" onClick={handleLogoClick} title="Click me 5 times! 🎉">
            <span className="logo-text">Alper <b>Doğramacı</b></span>
            <span className="logo-text-mobile">AD</span>
          </a>
          {/* Desktop links */}
          <div className="navbar-links">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile menu (only when open) */}
          {menuOpen && (
            <div className="navbar-links open">
              <div className="mobile-menu-header">
                <span className="mobile-menu-title">Menu</span>
                <button
                  className="mobile-menu-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="mobile-menu-links">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="navbar-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          <button
            className={`navbar-burger${menuOpen ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(m => !m)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
      </nav>
      {showSecret && (
        <div className="celebration-secret-toast">
          <span role="img" aria-label="party">🎉</span>
          <b>Celebration!</b> You found the secret! <span role="img" aria-label="party">🥳</span>
        </div>
      )}
    </>
  );
};

export default Navbar; 