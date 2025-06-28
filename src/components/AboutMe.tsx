import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        {/* Main About Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card-custom h-100">
              <div className="text-center mb-4">
                <div className="pulse" style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: '#aa00ff' }}>
                  <i className="fas fa-user-astronaut"></i>
                </div>
              </div>
              <h3 className="h4 text-white mb-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>Who I Am</h3>
              <p className="text-white-50 mb-3" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                I'm <strong style={{ color: '#aa00ff' }}>Alper Doğramacı</strong>, a passionate full-stack developer with a unique background in engineering. 
                My journey from Petroleum and Natural Gas Engineering at METU to software development has given me a unique perspective on problem-solving.
              </p>
              <p className="text-white-50 mb-3" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                I specialize in <strong style={{ color: '#aa00ff' }}>React</strong>, <strong style={{ color: '#aa00ff' }}>TypeScript</strong>, and <strong style={{ color: '#aa00ff' }}>Node.js</strong>, 
                creating applications that are not only functional but also provide exceptional user experiences.
              </p>
              <p className="text-white-50" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                My projects demonstrate expertise in real-time communication, API integration, and modern web development practices. 
                I believe in writing clean, maintainable code that scales with your business needs.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card-custom h-100">
              <h3 className="h4 text-white mb-4 text-center" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                <i className="fas fa-chart-line me-2" style={{ color: '#aa00ff' }}></i>
                My Journey
              </h3>
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center p-3 rounded" style={{ 
                    backgroundColor: 'rgba(170, 0, 255, 0.1)', 
                    border: '1px solid rgba(170, 0, 255, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <div className="mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h5 className="text-white mb-1" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Education</h5>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Petroleum & Natural Gas Engineering</p>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>METU</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 rounded" style={{ 
                    backgroundColor: 'rgba(170, 0, 255, 0.1)', 
                    border: '1px solid rgba(170, 0, 255, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <div className="mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-code"></i>
                    </div>
                    <h5 className="text-white mb-1" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Specialization</h5>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Full-Stack Development</p>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>React & TypeScript</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 rounded" style={{ 
                    backgroundColor: 'rgba(170, 0, 255, 0.1)', 
                    border: '1px solid rgba(170, 0, 255, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <div className="mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-project-diagram"></i>
                    </div>
                    <h5 className="text-white mb-1" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Projects</h5>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>6+ Applications</p>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>100% Success Rate</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 rounded" style={{ 
                    backgroundColor: 'rgba(170, 0, 255, 0.1)', 
                    border: '1px solid rgba(170, 0, 255, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <div className="mb-2" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h5 className="text-white mb-1" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Focus</h5>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Scalable Solutions</p>
                    <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>User Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card-custom">
              <h3 className="h4 text-white mb-4 text-center" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                <i className="fas fa-trophy me-2" style={{ color: '#aa00ff' }}></i>
                Key Achievements
              </h3>
              <div className="row g-3">
                <div className="col-md-6 col-lg-3">
                  <div className="text-center p-3">
                    <div className="mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-code-branch"></i>
                    </div>
                    <h5 className="text-white mb-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Production Apps</h5>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                      Built 6+ production-ready web applications with modern technologies
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="text-center p-3">
                    <div className="mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-broadcast-tower"></i>
                    </div>
                    <h5 className="text-white mb-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Real-time Features</h5>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                      Implemented WebSocket technology for live communication features
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="text-center p-3">
                    <div className="mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-plug"></i>
                    </div>
                    <h5 className="text-white mb-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>API Integration</h5>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                      Integrated multiple third-party APIs and services seamlessly
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="text-center p-3">
                    <div className="mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: '#aa00ff' }}>
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h5 className="text-white mb-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Deployment Success</h5>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
                      Maintained 100% deployment success rate with GitHub Pages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development Workflow Section */}
        <div className="row">
          <div className="col-12">
            <div className="card-custom">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="text-white mb-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                    <i className="fab fa-github me-2" style={{ color: '#aa00ff' }}></i>
                    Development Workflow
                  </h4>
                  <p className="text-white-50 mb-3" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                    All projects follow modern development practices with automated deployment using GitHub Pages. 
                    Each application is built with clean, maintainable code and follows industry best practices.
                  </p>
                  <div className="d-flex flex-wrap gap-2" style={{ gap: 'clamp(0.25rem, 1vw, 0.5rem) !important' }}>
                    <span className="badge bg-success" style={{ 
                      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                    }}>
                      <i className="fas fa-check-circle me-1"></i>
                      Automated Deployment
                    </span>
                    <span className="badge bg-info" style={{ 
                      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                    }}>
                      <i className="fas fa-sync-alt me-1"></i>
                      Continuous Integration
                    </span>
                    <span className="badge bg-warning" style={{ 
                      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                    }}>
                      <i className="fas fa-shield-alt me-1"></i>
                      HTTPS Enabled
                    </span>
                    <span className="badge bg-primary" style={{ 
                      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                      padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                    }}>
                      <i className="fas fa-code me-1"></i>
                      Clean Code
                    </span>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: '#aa00ff' }}>
                    <i className="fab fa-github"></i>
                  </div>
                  <a 
                    href="https://github.com/AlperDog" 
                    className="btn btn-custom mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                      padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.2rem, 3vw, 1.5rem)'
                    }}
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
    </section>
  );
};

export default AboutMe; 