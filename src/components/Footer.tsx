import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4" style={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.3)', 
      borderTop: '1px solid rgba(170, 0, 255, 0.2)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              © {currentYear} Alper Doğramacı. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a 
                href="#home" 
                className="text-white-50 text-decoration-none"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#aa00ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
                <i className="fas fa-arrow-up me-1"></i>
                Back to Top
              </a>
            </div>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="text-white-50 small mb-0">
              Built with <i className="fas fa-heart" style={{ color: '#aa00ff' }}></i> using React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 