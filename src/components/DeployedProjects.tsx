import React from 'react';

const DeployedProjects: React.FC = () => {
  const deployedProjects = [
    {
      id: 1,
      title: "Watch Party - Collaborative Streaming",
      description: "Real-time collaborative streaming platform with synchronized video playback, live chat, and room management. Built with TypeScript and modern web technologies.",
      technologies: ["TypeScript", "React", "Node.js", "WebRTC", "Socket.io"],
      demoLink: "https://github.com/AlperDog/watch-party",
      githubLink: "https://github.com/AlperDog/watch-party",
      image: "fas fa-video",
      status: "In Development",
      lastUpdated: "2024",
      features: ["Real-time Sync", "WebRTC", "Live Chat", "Room Management"]
    },
    {
      id: 2,
      title: "Hashtag Trend Analyzer",
      description: "Full-stack social media trend analysis application with real-time data processing, sentiment analysis, and interactive visualizations.",
      technologies: ["React", "Node.js", "MongoDB", "Twitter API", "NLP"],
      demoLink: "https://github.com/AlperDog/hashtag-analyzer",
      githubLink: "https://github.com/AlperDog/hashtag-analyzer",
      image: "fas fa-hashtag",
      status: "In Development",
      lastUpdated: "2024",
      features: ["Real-time Analysis", "Multi-platform", "AI Integration", "Data Visualization"]
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
      features: ["Drag & Drop", "Real-time Updates", "Kanban Board", "Priority Levels"]
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
      features: ["Location Services", "5-Day Forecast", "Interactive Maps", "Data Charts"]
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
      features: ["Millisecond Precision", "Lap Timing", "Clean UI", "TypeScript"]
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
      features: ["Pet Care System", "Evolving Mechanics", "Mobile Responsive", "Interactive Design"]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Live': { color: 'success', icon: 'fas fa-check-circle' },
      'In Development': { color: 'warning', icon: 'fas fa-code' },
      'Maintenance': { color: 'info', icon: 'fas fa-tools' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['In Development'];

    return (
      <span className={`badge bg-${config.color} me-2`}>
        <i className={`${config.icon} me-1`}></i>
        {status}
      </span>
    );
  };

  return (
    <section id="deployed-projects" className="py-5">
      <div className="container">
        <h2 className="section-title">Live Applications</h2>
        <p className="text-center text-white-50 mb-5">
          A showcase of my deployed applications, each demonstrating different aspects of modern web development 
          from full-stack applications to interactive tools and games.
        </p>
        
        <div className="row g-4">
          {deployedProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-xl-4">
              <div className="card-custom h-100">
                <div className="text-center mb-4">
                  <div style={{ fontSize: '3rem', color: '#aa00ff' }}>
                    <i className={project.image}></i>
                  </div>
                  <h3 className="h4 text-white mt-3">{project.title}</h3>
                  <div className="mb-2">
                    {getStatusBadge(project.status)}
                    <small className="text-white-50">Updated: {project.lastUpdated}</small>
                  </div>
                </div>
                
                <p className="text-white-50 mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <h6 className="text-white mb-2">Key Features:</h6>
                  <div className="row g-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="col-6">
                        <small className="text-white-50">
                          <i className="fas fa-check me-1" style={{ color: '#aa00ff' }}></i>
                          {feature}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <h6 className="text-white mb-2">Technologies:</h6>
                  <div className="d-flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="d-flex gap-2 mt-auto">
                  <a 
                    href={project.demoLink} 
                    className="btn btn-custom btn-sm flex-fill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    {project.status === 'Live' ? 'Live Demo' : 'View Project'}
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="btn btn-outline-light btn-sm flex-fill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github me-2"></i>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card-custom">
              <h3 className="h4 text-white mb-3">Interested in My Work?</h3>
              <p className="text-white-50 mb-4">
                I'm always open to discussing new opportunities and collaborations. 
                Let's connect and explore how we can work together!
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button className="btn btn-custom" onClick={() => window.open('mailto:dogramacialper98@gmail.com', '_blank')}>
                  <i className="fas fa-envelope me-2"></i>
                  Get in Touch
                </button>
                <a 
                  href="https://github.com/AlperDog" 
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
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