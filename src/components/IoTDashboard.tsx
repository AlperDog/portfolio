import React, { useState, useEffect } from 'react';

const IoTDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const projectData = {
    title: "Real-Time IoT Dashboard",
    description: "A modern, scalable real-time dashboard for IoT data visualization and analytics built with React, Node.js, and TypeScript. Features live sensor data streaming, interactive charts, and comprehensive device management.",
    technologies: [
      "React 18", "TypeScript", "Node.js", "Express", "Socket.io", 
      "Chart.js", "Tailwind CSS", "MongoDB", "Redis", "Docker",
      "WebSocket", "Real-time Analytics", "IoT Integration"
    ],
    features: [
      "Real-time Data Streaming with WebSocket",
      "Interactive Charts (Line, Bar, Gauge)",
      "Responsive Design with Tailwind CSS",
      "Device Management & Monitoring",
      "Real-time Alerts & Notifications",
      "Data Analytics & Trend Analysis",
      "Scalable Microservices Architecture",
      "Docker Containerization",
      "TypeScript Full-stack Development",
      "Hot Reload Development Environment"
    ],
    stats: {
      totalDevices: 12,
      activeSensors: 48,
      dataPoints: "2.5M+",
      uptime: "99.9%"
    },
    demoLink: "https://github.com/AlperDog/Real-Time-IoT-Dashboard",
    githubLink: "https://github.com/AlperDog/Real-Time-IoT-Dashboard",
    status: "In Development",
    lastUpdated: "2025"
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-info-circle' },
    { id: 'features', label: 'Features', icon: 'fas fa-star' },
    { id: 'tech', label: 'Tech Stack', icon: 'fas fa-code' }
  ];

  return (
    <section id="iot-dashboard" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card-custom" style={{ 
              borderTop: '4px solid #00d4ff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div className="text-center mb-4">
                <div style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', color: '#00d4ff' }}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h2 className="text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                  {projectData.title}
                </h2>
                <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                                          <span className="badge bg-warning" style={{ 
                          fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                          padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(1rem, 2.5vw, 1.5rem)'
                        }}>
                          <i className="fas fa-code me-2"></i>
                          In Development
                        </span>
                  <span className="badge bg-primary" style={{ 
                    fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                    padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(1rem, 2.5vw, 1.5rem)'
                  }}>
                    <i className="fas fa-layer-group me-2"></i>
                    Full-Stack
                  </span>
                  <small className="text-white-50" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
                    Updated: {projectData.lastUpdated}
                  </small>
                </div>
                <p className="text-white-50 mb-4" style={{ 
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: '1.6',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  {projectData.description}
                </p>
              </div>

              {/* Stats Row */}
              <div className="row mb-4">
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#00d4ff' }}>
                      <i className="fas fa-microchip"></i>
                    </div>
                    <h4 className="text-white mt-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                      {projectData.stats.totalDevices}
                    </h4>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                      IoT Devices
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#28a745' }}>
                      <i className="fas fa-sensor"></i>
                    </div>
                    <h4 className="text-white mt-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                      {projectData.stats.activeSensors}
                    </h4>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                      Active Sensors
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#ffc107' }}>
                      <i className="fas fa-database"></i>
                    </div>
                    <h4 className="text-white mt-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                      {projectData.stats.dataPoints}
                    </h4>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                      Data Points
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#dc3545' }}>
                      <i className="fas fa-server"></i>
                    </div>
                    <h4 className="text-white mt-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
                      {projectData.stats.uptime}
                    </h4>
                    <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                      Uptime
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-4">
                <div className="nav nav-pills justify-content-center" id="iot-tabs" role="tablist">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)',
                        margin: '0 0.25rem'
                      }}
                    >
                      <i className={`${tab.icon} me-2`}></i>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="text-white mb-3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
                        <i className="fas fa-rocket me-2" style={{ color: '#00d4ff' }}></i>
                        Project Highlights
                      </h5>
                      <ul className="text-white-50" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                        <li className="mb-2">Real-time data streaming with WebSocket technology</li>
                        <li className="mb-2">Interactive charts and data visualization</li>
                        <li className="mb-2">Responsive design with modern UI/UX</li>
                        <li className="mb-2">Scalable microservices architecture</li>
                        <li className="mb-2">Docker containerization for easy deployment</li>
                        <li className="mb-2">TypeScript for full-stack type safety</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="text-white mb-3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
                        <i className="fas fa-cogs me-2" style={{ color: '#00d4ff' }}></i>
                        Key Capabilities
                      </h5>
                      <ul className="text-white-50" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                        <li className="mb-2">Live sensor data monitoring</li>
                        <li className="mb-2">Device management and configuration</li>
                        <li className="mb-2">Real-time alerts and notifications</li>
                        <li className="mb-2">Data analytics and trend analysis</li>
                        <li className="mb-2">Multi-device support</li>
                        <li className="mb-2">Historical data tracking</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div className="row g-3">
                    {projectData.features.map((feature, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex align-items-start">
                          <div style={{ color: '#00d4ff', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginRight: '0.75rem', marginTop: '0.1rem' }}>
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <p className="text-white-50 mb-0" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tab */}
                {activeTab === 'tech' && (
                  <div>
                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <h6 className="text-white mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                          <i className="fas fa-desktop me-2" style={{ color: '#00d4ff' }}></i>
                          Frontend Technologies
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {projectData.technologies.slice(0, 6).map((tech, index) => (
                            <span key={index} className="badge bg-primary" style={{ 
                              fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                              padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h6 className="text-white mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                          <i className="fas fa-server me-2" style={{ color: '#00d4ff' }}></i>
                          Backend Technologies
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {projectData.technologies.slice(6, 12).map((tech, index) => (
                            <span key={index} className="badge bg-success" style={{ 
                              fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                              padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <h6 className="text-white mb-3" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                          <i className="fas fa-tools me-2" style={{ color: '#00d4ff' }}></i>
                          Development Tools
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {projectData.technologies.slice(12).map((tech, index) => (
                            <span key={index} className="badge bg-warning text-dark" style={{ 
                              fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                              padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </div>

              {/* Action Buttons */}
              <div className="text-center mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <a 
                    href={projectData.demoLink}
                    className="btn btn-custom"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)'
                    }}
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    View Project
                  </a>
                  <a 
                    href={projectData.githubLink}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)'
                    }}
                  >
                    <i className="fab fa-github me-2"></i>
                    GitHub Repository
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

export default IoTDashboard; 