import React, { useState } from 'react';

const DeployedProjects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const deployedProjects = [
    {
      id: 9,
      title: "Real-Time IoT Dashboard",
      description: "A modern, scalable real-time dashboard for IoT data visualization and analytics built with React, Node.js, and TypeScript. Features live sensor data streaming, interactive charts, and comprehensive device management.",
      technologies: ["React 18", "TypeScript", "Node.js", "Express", "Socket.io", "Chart.js", "Tailwind CSS", "MongoDB", "Redis", "Docker"],
      demoLink: "https://github.com/AlperDog/Real-Time-IoT-Dashboard",
      githubLink: "https://github.com/AlperDog/Real-Time-IoT-Dashboard",
      image: "fas fa-chart-line",
      status: "Live",
      lastUpdated: "2025",
      features: [
        "Real-time Data Streaming",
        "Interactive Charts & Analytics",
        "Device Management",
        "WebSocket Communication",
        "Docker Containerization"
      ],
      category: "Full-Stack"
    },
    {
      id: 8,
      title: "Finance App - Personal Finance Management",
      description: "A modern, fullstack personal finance management application. Fastify (Node.js) backend, React (Vite) frontend.",
      technologies: ["Fastify", "Node.js", "React", "Vite", "JWT", "Chart.js"],
      demoLink: "https://github.com/AlperDog/finance-app-fullstack",
      githubLink: "https://github.com/AlperDog/finance-app-fullstack",
      image: "fas fa-coins",
      status: "Flagship",
      lastUpdated: "2025",
      features: [
        "Income/Expense Tracking",
        "Category and Budget Management",
        "Financial Analytics",
        "Secure Login with JWT",
        "Modern Dashboard UI"
      ],
      category: "Full-Stack"
    },
    {
      id: 0,
      title: "Poll App - Real-Time Cross-Platform Polling",
      description: "A cross-platform, real-time polling app built with Flutter and a modern Go backend. Instantly create, join, and visualize live polls with beautiful charts and WebSocket-powered updates.",
      technologies: ["Flutter", "Go (Fiber/Echo)", "WebSocket", "JWT", "PostgreSQL", "Redis", "Docker", "Riverpod", "fl_chart"],
      demoLink: "https://github.com/AlperDog/poll_app",
      githubLink: "https://github.com/AlperDog/poll_app",
      image: "fas fa-poll",
      status: "Live",
      lastUpdated: "2025",
      features: [
        "Real-time Voting",
        "Cross-platform (Android, iOS, Web, Desktop)",
        "JWT Auth & Guest Access",
        "Live Results with Charts",
        "Admin Dashboard",
        "Modern UI & Responsive Design",
        "Scalable Go Backend",
        "Docker-ready"
      ],
      category: "Frontend"
    },
    {
      id: 1,
      title: "Watch Party - Collaborative Streaming",
      description: "Real-time collaborative streaming platform with synchronized video playback, live chat, and room management. Built with TypeScript and modern web technologies.",
      technologies: ["TypeScript", "React", "Node.js", "WebRTC", "Socket.io"],
      demoLink: "https://github.com/AlperDog/watch-party",
      githubLink: "https://github.com/AlperDog/watch-party",
      image: "fas fa-video",
      status: "Live",
      lastUpdated: "2024",
      features: ["Real-time Sync", "WebRTC", "Live Chat", "Room Management"],
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Hashtag Trend Analyzer",
      description: "Full-stack social media trend analysis application with real-time data processing, sentiment analysis, and interactive visualizations.",
      technologies: ["React", "Node.js", "MongoDB", "Twitter API", "NLP"],
      demoLink: "https://github.com/AlperDog/hashtag-analyzer",
      githubLink: "https://github.com/AlperDog/hashtag-analyzer",
      image: "fas fa-hashtag",
      status: "Maintenance",
      lastUpdated: "2024",
      features: ["Real-time Analysis", "Multi-platform", "AI Integration", "Data Visualization"],
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Comprehensive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "TypeScript", "Bootstrap", "LocalStorage", "CRUD"],
      demoLink: "https://AlperDog.github.io/task-manager-app",
      githubLink: "https://github.com/AlperDog/task-manager-app",
      image: "fas fa-tasks",
      status: "Live",
      lastUpdated: "2024",
      features: ["Drag & Drop", "Real-time Updates", "Kanban Board", "Priority Levels"],
      category: "Frontend"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Modern weather dashboard with location-based forecasts, interactive maps, and beautiful data visualization using multiple weather APIs.",
      technologies: ["React", "TypeScript", "Weather API", "Geolocation", "Chart.js"],
      demoLink: "https://AlperDog.github.io/weather-dashboard-app",
      githubLink: "https://github.com/AlperDog/weather-dashboard-app",
      image: "fas fa-cloud-sun",
      status: "Live",
      lastUpdated: "2024",
      features: ["Location Services", "5-Day Forecast", "Interactive Maps", "Data Charts"],
      category: "Frontend"
    },
    {
      id: 5,
      title: "Stopwatch App",
      description: "Precise stopwatch application with lap timing functionality and millisecond accuracy. Clean TypeScript implementation with modern React patterns.",
      technologies: ["React", "TypeScript", "Precise Timing", "State Management"],
      demoLink: "https://alperdog.github.io/stopwatch-app",
      githubLink: "https://github.com/AlperDog/stopwatch-app",
      image: "fas fa-stopwatch",
      status: "Live",
      lastUpdated: "2024",
      features: ["Millisecond Precision", "Lap Timing", "Clean UI", "TypeScript"],
      category: "Frontend"
    },
    {
      id: 6,
      title: "Virtual Pet App",
      description: "Interactive virtual pet game with hunger, energy, and happiness tracking. Features evolving mechanics and responsive mobile design.",
      technologies: ["React", "Bootstrap 5", "Game Logic", "LocalStorage"],
      demoLink: "https://alperdog.github.io/pet-app",
      githubLink: "https://github.com/AlperDog/pet-app",
      image: "fas fa-paw",
      status: "Live",
      lastUpdated: "2024",
      features: ["Pet Care System", "Evolving Mechanics", "Mobile Responsive", "Interactive Design"],
      category: "Game"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Live': { color: 'success', icon: 'fas fa-check-circle' },
      'In Development': { color: 'warning', icon: 'fas fa-code' },
      'Maintenance': { color: 'info', icon: 'fas fa-tools' },
      'Flagship': { color: 'primary', icon: 'fas fa-star' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['In Development'];

    return (
      <span className={`badge bg-${config.color} me-2`} style={{ 
        fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
        padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
      }}>
        <i className={`${config.icon} me-1`}></i>
        {status}
      </span>
    );
  };

  const getCategoryBadge = (category: string) => {
    const categoryColors = {
      'Full-Stack': 'primary',
      'Frontend': 'info',
      'Game': 'success'
    };

    return (
      <span className={`badge bg-${categoryColors[category as keyof typeof categoryColors] || 'secondary'}`} style={{ 
        fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)',
        padding: 'clamp(0.2rem, 0.8vw, 0.3rem) clamp(0.4rem, 1.5vw, 0.6rem)'
      }}>
        {category}
      </span>
    );
  };

  return (
    <section id="deployed-projects" className="py-5">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-white-50 mb-5" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          A showcase of my deployed applications, each demonstrating different aspects of modern web development 
          from full-stack applications to interactive tools and games.
        </p>

        {/* Project Statistics */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card-custom">
              <div className="row text-center project-stats-row">
                <div className="col-md-3 col-6 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>9 Projects</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Total Applications</p>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#28a745' }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>4 Live</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Deployed & Running</p>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#ffc107' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>4 In Dev</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Under Development</p>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#17a2b8' }}>
                    <i className="fas fa-layer-group"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>3 Categories</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Full-Stack, Frontend, Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects Grid - expandable cards */}
        <div className="row g-4 projects-grid-row">
          {deployedProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-xl-4">
              <div
                className={`card-custom project-card-easy h-100 ${expandedProject === project.id ? 'expanded' : ''}`}
                style={{ 
                  borderTop: `4px solid ${project.status === 'Live' ? '#28a745' : '#ffc107'}`,
                  position: 'relative',
                  cursor: 'pointer',
                  minHeight: expandedProject === project.id ? 340 : 120,
                  transition: 'all 0.4s',
                  zIndex: expandedProject === project.id ? 2 : 1
                }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                tabIndex={0}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpandedProject(expandedProject === project.id ? null : project.id)}
                aria-expanded={expandedProject === project.id}
                aria-label={project.title + (expandedProject === project.id ? ' details expanded' : '')}
              >
                {/* Category Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                  {getCategoryBadge(project.category)}
                </div>
                {/* Project Header */}
                <div className="text-center mb-2">
                  <div style={{ fontSize: 'clamp(2.2rem, 7vw, 3rem)', color: '#aa00ff' }}>
                    <i className={project.image}></i>
                  </div>
                  <h3 className="h5 text-white mt-2 mb-1" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{project.title}</h3>
                  <div className="mb-1">
                    {getStatusBadge(project.status)}
                    <small className="text-white-50" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}>Updated: {project.lastUpdated}</small>
                  </div>
                </div>
                {/* Expandable Details */}
                {expandedProject === project.id && (
                  <>
                    <p className="text-white-50 mb-3" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.6' }}>{project.description}</p>
                    {/* Key Features */}
                    <div className="mb-3">
                      <h6 className="text-white mb-2" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                        <i className="fas fa-star me-2" style={{ color: '#aa00ff' }}></i>
                        Key Features
                      </h6>
                      <div className="row g-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="col-6">
                            <small className="text-white-50 d-flex align-items-center" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)' }}>
                              <i className="fas fa-check me-2" style={{ color: '#aa00ff', fontSize: '0.7rem' }}></i>
                              {feature}
                            </small>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Technologies */}
                    <div className="mb-3">
                      <h6 className="text-white mb-2" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                        <i className="fas fa-tools me-2" style={{ color: '#aa00ff' }}></i>
                        Technologies
                      </h6>
                      <div className="d-flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-secondary" style={{ 
                            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
                            padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="d-flex gap-2 mt-auto mb-2 justify-content-center" style={{ gap: 'clamp(0.5rem, 2vw, 0.75rem) !important' }}>
                      <a 
                        href={project.demoLink} 
                        className="btn btn-custom btn-sm flex-fill"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)',
                          padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)'
                        }}
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        {project.status === 'Live' ? 'Live Demo' : 'View Project'}
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="btn btn-outline-light btn-sm flex-fill"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)',
                          padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)'
                        }}
                      >
                        <i className="fab fa-github me-2"></i>
                        Source Code
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Call to action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card-custom">
              <div className="mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', color: '#aa00ff' }}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="h4 text-white mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>Interested in My Work?</h3>
              <p className="text-white-50 mb-4" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>
                I'm always open to discussing new opportunities and collaborations. 
                Let's connect and explore how we can work together to bring your ideas to life!
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem) !important' }}>
                <button className="btn btn-custom" onClick={() => window.open('mailto:dogramacialper98@gmail.com', '_blank')} style={{ 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                  marginTop: '1.5rem'
                }}>
                  <i className="fas fa-envelope me-2"></i>
                  Get in Touch
                </button>
                <a 
                  href="https://github.com/AlperDog?tab=repositories" 
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)'
                  }}
                >
                  <i className="fab fa-github me-2"></i>
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployedProjects;