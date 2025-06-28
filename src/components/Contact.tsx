import React, { useState, useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [connectClickCount, setConnectClickCount] = useState(0);
  const [showOopsText, setShowOopsText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHoldingHandshake, setIsHoldingHandshake] = useState(false);
  const shakeStartTime = useRef<number | null>(null);
  const shakeTimer = useRef<NodeJS.Timeout | null>(null);
  const shakeActive = useRef(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTablet = /ipad|android(?=.*\b(?!.*mobile))/i.test(userAgent);
      setIsMobile(isMobileDevice || isTablet);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Shake detection for mobile devices
  useEffect(() => {
    if (!isMobile) return;

    let lastUpdate = 0;
    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeCount = 0;
    const SHAKE_THRESHOLD = 15;

    const handleShake = (event: DeviceMotionEvent) => {
      const current = event.accelerationIncludingGravity;
      if (!current) return;

      const currentTime = new Date().getTime();
      if ((currentTime - lastUpdate) > 100) {
        const diffTime = currentTime - lastUpdate;
        lastUpdate = currentTime;

        const speed = Math.abs(current.x! + current.y! + current.z! - lastX - lastY - lastZ) / diffTime * 10000;

        if (speed > SHAKE_THRESHOLD) {
          shakeCount++;
          if (shakeCount >= 3) { // Require 3 shakes to trigger
            triggerYogurtSplash();
            setShowOopsText(true);
            setTimeout(() => setShowOopsText(false), 10000);
            shakeCount = 0;
          }
        }

        lastX = current.x!;
        lastY = current.y!;
        lastZ = current.z!;
      }
    };

    // Request device motion permission on iOS
    if (typeof DeviceMotionEvent !== 'undefined' && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      (DeviceMotionEvent as any).requestPermission().then((permission: string) => {
        if (permission === 'granted') {
          window.addEventListener('devicemotion', handleShake);
        }
      });
    } else {
      window.addEventListener('devicemotion', handleShake);
    }

    return () => {
      window.removeEventListener('devicemotion', handleShake);
    };
  }, [isMobile]);

  // New: Custom shake detection for handshake hold
  useEffect(() => {
    if (!isMobile || !isHoldingHandshake) return;
    let lastUpdate = 0;
    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeCount = 0;
    const SHAKE_THRESHOLD = 15;
    let shakeDetected = false;

    const handleShake = (event: DeviceMotionEvent) => {
      const current = event.accelerationIncludingGravity;
      if (!current) return;
      const currentTime = new Date().getTime();
      if ((currentTime - lastUpdate) > 100) {
        const diffTime = currentTime - lastUpdate;
        lastUpdate = currentTime;
        const speed = Math.abs(current.x! + current.y! + current.z! - lastX - lastY - lastZ) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
          if (!shakeActive.current) {
            shakeActive.current = true;
            shakeStartTime.current = Date.now();
            shakeTimer.current = setTimeout(() => {
              // 5 seconds of shaking
              triggerYogurtSplash();
              setShowOopsText(true);
              setTimeout(() => setShowOopsText(false), 10000);
              shakeActive.current = false;
              setIsHoldingHandshake(false);
            }, 5000);
          }
        } else {
          // If not shaking, reset timer
          if (shakeActive.current && shakeStartTime.current && Date.now() - shakeStartTime.current > 600) {
            shakeActive.current = false;
            shakeStartTime.current = null;
            if (shakeTimer.current) clearTimeout(shakeTimer.current);
          }
        }
        lastX = current.x!;
        lastY = current.y!;
        lastZ = current.z!;
      }
    };
    // Request device motion permission on iOS
    if (typeof DeviceMotionEvent !== 'undefined' && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      (DeviceMotionEvent as any).requestPermission().then((permission: string) => {
        if (permission === 'granted') {
          window.addEventListener('devicemotion', handleShake);
        }
      });
    } else {
      window.addEventListener('devicemotion', handleShake);
    }
    return () => {
      window.removeEventListener('devicemotion', handleShake);
      if (shakeTimer.current) clearTimeout(shakeTimer.current);
      shakeActive.current = false;
      shakeStartTime.current = null;
    };
  }, [isMobile, isHoldingHandshake]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleConnectClick = () => {
    // Only trigger on click for desktop devices
    if (isMobile) return;
    
    setConnectClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 31) {
        // Trigger yogurt splash effect
        triggerYogurtSplash();
        // Show OOPS text
        setShowOopsText(true);
        // Reset counter after 15 seconds
        setTimeout(() => setConnectClickCount(0), 15000);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdkzwbpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/AlperDog', color: '#333', description: 'View my projects and code' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/dogramacialper/', color: '#0077b5', description: 'Professional profile' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/905069510808', color: '#25D366', description: 'Quick chat' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:dogramacialper98@gmail.com', color: '#aa00ff', description: 'Direct email' }
  ];

  return (
    <>
      <section id="contact" className="py-5" style={{ backgroundColor: '#121212' }}>
        <div className="container">
          <h2 
            className="section-title text-white" 
            onClick={handleConnectClick}
            style={{ 
              cursor: isMobile ? 'default' : 'pointer',
              position: 'relative',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)'
            }}
            title={isMobile ? "Shake your device for a yogurt splash! 🥛💧" : "Click me 31 times for a yogurt splash! 🥛💧"}
          >
            Let's Connect
            {!isMobile && connectClickCount > 0 && connectClickCount < 31 && (
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
            {isMobile && (
              <div 
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                  animation: 'pulse 2s ease-in-out infinite',
                  color: '#aa00ff'
                }}
                title="Shake your device!"
              >
                📱
              </div>
            )}
          </h2>
          <p className="text-center text-white-50 mb-5" style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
            I'm actively seeking new opportunities and collaborations. Whether you have a project in mind 
            or just want to discuss potential opportunities, I'd love to hear from you!
          </p>
          
          <div className="row g-5">
            <div className="col-lg-6 col-xl-5">
              <div className="card-custom h-100" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(170, 0, 255, 0.2)' }}>
                <h3 className="h4 text-white mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>Send Me a Message</h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success mb-4" style={{ 
                    backgroundColor: 'rgba(40, 167, 69, 0.2)', 
                    border: '1px solid #28a745', 
                    color: '#fff',
                    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
                  }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mb-4" style={{ 
                    backgroundColor: 'rgba(220, 53, 69, 0.2)', 
                    border: '1px solid #dc3545', 
                    color: '#fff',
                    fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
                  }}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}

                <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mdkzwbpy">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white fw-bold" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(170, 0, 255, 0.3)',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white fw-bold" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(170, 0, 255, 0.3)',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                      }}
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="company" className="form-label text-white fw-bold" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Company/Organization</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(170, 0, 255, 0.3)',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                      }}
                      placeholder="Your company (optional)"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label text-white fw-bold" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(170, 0, 255, 0.3)',
                        color: '#fff',
                        borderRadius: '8px',
                        padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                        resize: 'none',
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                      }}
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-custom px-5 py-3"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: '#aa00ff',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        transition: 'all 0.3s ease',
                        minWidth: 'clamp(180px, 50vw, 200px)',
                        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#8a00d4';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(170, 0, 255, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#aa00ff';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-6 col-xl-7">
              <div className="card-custom h-100" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(170, 0, 255, 0.2)' }}>
                <h3 className="h4 text-white mb-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>Get In Touch</h3>
                <p className="text-white-50 mb-4" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                  I'm actively looking for new opportunities in full-stack development, particularly roles involving 
                  React, TypeScript, and modern web technologies. I'm open to remote work and relocation opportunities.
                </p>
                
                <div className="row g-3 mb-4 contact-social-row">
                  {socialLinks.map((social) => (
                    <div key={social.name} className="col-6 col-lg-6 col-xl-6">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center p-3 rounded"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(170, 0, 255, 0.2)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          borderRadius: '8px',
                          padding: 'clamp(0.75rem, 2vw, 1rem)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.borderColor = '#aa00ff';
                          e.currentTarget.style.backgroundColor = 'rgba(170, 0, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'rgba(170, 0, 255, 0.2)';
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                      >
                        <div 
                          className="me-3"
                          style={{ 
                            fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', 
                            color: social.color 
                          }}
                        >
                          <i className={social.icon}></i>
                        </div>
                        <div>
                          <div className="text-white fw-bold" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{social.name}</div>
                          <small className="text-white-50" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>{social.description}</small>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div
                    className="mb-3"
                    style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', color: '#aa00ff', touchAction: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
                    onTouchStart={() => isMobile && setIsHoldingHandshake(true)}
                    onTouchEnd={() => isMobile && setIsHoldingHandshake(false)}
                    onTouchCancel={() => isMobile && setIsHoldingHandshake(false)}
                    title={isMobile ? 'Hold and shake for 5 seconds!' : undefined}
                  >
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>Ready to Collaborate?</h5>
                  <p className="text-white-50" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                    I'm excited to discuss how I can contribute to your team and help bring your projects to life. 
                    Let's schedule a call to explore potential opportunities!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <h1 style={{ 
              fontSize: 'clamp(3rem, 15vw, 8rem)', 
              fontWeight: 'bold',
              textShadow: '0 0 30px rgba(255,255,255,0.8)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              OOPS!
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact; 