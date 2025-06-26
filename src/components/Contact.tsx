import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        setFormData({ name: '', email: '', message: '' });
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
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/AlperDog', color: '#333' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/dogramacialper/', color: '#0077b5' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/905069510808', color: '#25D366' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:dogramacialper98@gmail.com', color: '#aa00ff' }
  ];

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#121212' }}>
      <div className="container">
        <h2 className="section-title text-white">Get In Touch</h2>
        <p className="text-center text-white-50 mb-5">
          Ready to start a project or just want to chat? I'd love to hear from you!
        </p>
        
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="card-custom h-100" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(170, 0, 255, 0.2)' }}>
              <h3 className="h4 text-white mb-4">Send Me a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success mb-4" style={{ backgroundColor: 'rgba(40, 167, 69, 0.2)', border: '1px solid #28a745', color: '#fff' }}>
                  <i className="fas fa-check-circle me-2"></i>
                  Thanks! Your message has been sent.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-danger mb-4" style={{ backgroundColor: 'rgba(220, 53, 69, 0.2)', border: '1px solid #dc3545', color: '#fff' }}>
                  <i className="fas fa-exclamation-circle me-2"></i>
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mdkzwbpy">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white fw-bold">Full Name</label>
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
                      padding: '12px 16px'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white fw-bold">Email Address</label>
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
                      padding: '12px 16px'
                    }}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-white fw-bold">Message</label>
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
                      padding: '12px 16px',
                      resize: 'none'
                    }}
                    placeholder="Enter your message here..."
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
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      minWidth: '200px'
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
          
          <div className="col-lg-6">
            <div className="card-custom h-100" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(170, 0, 255, 0.2)' }}>
              <h3 className="h4 text-white mb-4">Connect With Me</h3>
              <p className="text-white-50 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="row g-3 mb-4">
                {socialLinks.map((social) => (
                  <div key={social.name} className="col-6">
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
                        borderRadius: '8px'
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
                          fontSize: '1.5rem', 
                          color: social.color 
                        }}
                      >
                        <i className={social.icon}></i>
                      </div>
                      <span className="text-white">{social.name}</span>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '3rem', color: '#aa00ff' }}>
                  <i className="fas fa-coffee"></i>
                </div>
                <h5 className="text-white">Let's grab a coffee!</h5>
                <p className="text-white-50">
                  Whether it's a virtual coffee or in person, I'm always excited to meet new people and discuss interesting projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 