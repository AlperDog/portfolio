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
              <h3 className="h4 text-white mb-3" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', textAlign: 'center' }}>Who I Am</h3>
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
              <div className="about-journey-grid">
                <div className="about-journey-card">
                  <i className="fas fa-graduation-cap"></i>
                  <h5 className="text-white mb-1">Education</h5>
                  <p className="text-white-50 small mb-0">Petroleum & Natural Gas Engineering</p>
                  <p className="text-white-50 small mb-0">METU</p>
                </div>
                <div className="about-journey-card">
                  <i className="fas fa-code"></i>
                  <h5 className="text-white mb-1">Specialization</h5>
                  <p className="text-white-50 small mb-0">Full-Stack Development</p>
                  <p className="text-white-50 small mb-0">React & TypeScript</p>
                </div>
                <div className="about-journey-card">
                  <i className="fas fa-project-diagram"></i>
                  <h5 className="text-white mb-1">Projects</h5>
                  <p className="text-white-50 small mb-0">6+ Applications</p>
                  <p className="text-white-50 small mb-0">100% Success Rate</p>
                </div>
                <div className="about-journey-card">
                  <i className="fas fa-rocket"></i>
                  <h5 className="text-white mb-1">Focus</h5>
                  <p className="text-white-50 small mb-0">Scalable Solutions</p>
                  <p className="text-white-50 small mb-0">User Experience</p>
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
              <div className="row g-3 about-achievements-row">
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
      </div>
    </section>
  );
};

export default AboutMe; 