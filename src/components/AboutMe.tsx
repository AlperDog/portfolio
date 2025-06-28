import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card-custom h-100">
              <div className="text-center mb-4">
                <div className="pulse" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', color: '#aa00ff' }}>
                  <i className="fas fa-user-astronaut"></i>
                </div>
              </div>
              <h3 className="h4 text-white mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>Professional Background</h3>
              <p className="text-white-50" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1rem)' }}>
                I'm Alper Doğramacı, a passionate full-stack developer with a strong foundation in engineering and a proven track record of building scalable web applications. My background in Petroleum and Natural Gas Engineering from METU has equipped me with analytical problem-solving skills that I apply to software development.
              </p>
              <p className="text-white-50" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1rem)' }}>
                I specialize in React, TypeScript, and Node.js, creating applications that are not only functional but also provide exceptional user experiences. My projects demonstrate expertise in real-time communication, API integration, and modern web development practices.
              </p>
              <div className="mt-4">
                <h6 className="text-white mb-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>Key Achievements:</h6>
                <ul className="text-white-50 small" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)' }}>
                  <li>Built 6+ production-ready web applications</li>
                  <li>Implemented real-time features using WebSocket technology</li>
                  <li>Integrated multiple third-party APIs and services</li>
                  <li>Maintained 100% deployment success rate with GitHub Pages</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#aa00ff' }}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4 className="h6 text-white" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)' }}>Education</h4>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>Petroleum & Natural Gas Engineering</p>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>METU</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#aa00ff' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 className="h6 text-white" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)' }}>Specialization</h4>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>Full-Stack Development</p>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>React & TypeScript</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#aa00ff' }}>
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h4 className="h6 text-white" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)' }}>Projects</h4>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>6+ Applications</p>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>100% Success Rate</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4 className="h6 text-white" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)' }}>Focus</h4>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>Scalable Solutions</p>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>User Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* GitHub Pages Info */}
          <div className="col-12">
            <div className="row mt-5">
              <div className="card-custom p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="text-white mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                      <i className="fab fa-github me-2" style={{ color: '#aa00ff' }}></i>
                      Development Workflow
                    </h4>
                    <p className="text-white-50 mb-3" style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1rem)' }}>
                      All projects follow modern development practices with automated deployment using GitHub Pages. 
                      Each application is built with clean, maintainable code and follows industry best practices.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-success" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)' }}>
                        <i className="fas fa-check-circle me-1"></i>
                        Automated Deployment
                      </span>
                      <span className="badge bg-info" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)' }}>
                        <i className="fas fa-sync-alt me-1"></i>
                        Continuous Integration
                      </span>
                      <span className="badge bg-warning" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)' }}>
                        <i className="fas fa-shield-alt me-1"></i>
                        HTTPS Enabled
                      </span>
                      <span className="badge bg-primary" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)' }}>
                        <i className="fas fa-code me-1"></i>
                        Clean Code
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', color: '#aa00ff' }}>
                      <i className="fab fa-github"></i>
                    </div>
                    <a 
                      href="https://github.com/AlperDog" 
                      className="btn btn-custom mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-2"></i>
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 