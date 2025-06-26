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
                <div className="pulse" style={{ fontSize: '4rem', color: '#aa00ff' }}>
                  <i className="fas fa-user-astronaut"></i>
                </div>
              </div>
              <h3 className="h4 text-white mb-3">The Journey</h3>
              <p className="text-white-50">
                Hi! I'm Alper Doğramacı, a creative front-end and game developer with a strong foundation in engineering and a passion for digital experiences. I studied Petroleum and Natural Gas Engineering at METU, but found my true calling in writing clean code and designing interactive web apps.
              </p>
              <p className="text-white-50">
                When I'm not coding, I'm either wrestling, exploring the cosmos, or teaching students how to build things with code. I love creating websites and games that are not only functional, but fun and memorable.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#aa00ff' }}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4 className="h6 text-white">Education</h4>
                  <p className="text-white-50 small">Petroleum & Natural Gas Engineering</p>
                  <p className="text-white-50 small">METU</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#aa00ff' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h4 className="h6 text-white">Focus</h4>
                  <p className="text-white-50 small">Front-end Development</p>
                  <p className="text-white-50 small">Game Development</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#aa00ff' }}>
                    <i className="fas fa-dumbbell"></i>
                  </div>
                  <h4 className="h6 text-white">Hobby</h4>
                  <p className="text-white-50 small">Wrestling</p>
                  <p className="text-white-50 small">Fitness</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card-custom text-center h-100">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4 className="h6 text-white">Passion</h4>
                  <p className="text-white-50 small">Space Exploration</p>
                  <p className="text-white-50 small">Teaching</p>
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
                  <h4 className="text-white mb-3">
                    <i className="fab fa-github me-2" style={{ color: '#aa00ff' }}></i>
                    GitHub Pages Deployment
                  </h4>
                  <p className="text-white-50 mb-3">
                    All projects are automatically deployed using GitHub Pages with continuous integration. 
                    Updates are pushed live whenever I commit changes to the main branch.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-success">
                      <i className="fas fa-check-circle me-1"></i>
                      Automated Deployment
                    </span>
                    <span className="badge bg-info">
                      <i className="fas fa-sync-alt me-1"></i>
                      Continuous Integration
                    </span>
                    <span className="badge bg-warning">
                      <i className="fas fa-shield-alt me-1"></i>
                      HTTPS Enabled
                    </span>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div style={{ fontSize: '4rem', color: '#aa00ff' }}>
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