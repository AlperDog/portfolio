import React from 'react';

const DeployedProjects: React.FC = () => {
  const deployedProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio built with React, TypeScript, and Bootstrap 5. Features interactive mini-games, smooth animations, and a modern dark theme.",
      technologies: ["React", "TypeScript", "Bootstrap 5", "GitHub Pages"],
      demoLink: "https://alperdog.github.io/portfolio",
      githubLink: "https://github.com/AlperDog/portfolio",
      image: "fas fa-user-astronaut",
      status: "Live",
      lastUpdated: "2024",
      features: ["Interactive Games", "Responsive Design", "Dark Theme", "Smooth Animations"]
    },
    {
      id: 2,
      title: "Virtual Pet App",
      description: "A mobile-style virtual pet game with hunger, energy, and happiness tracking. Features hidden surprises and evolving mechanics.",
      technologies: ["React", "Bootstrap 5", "Game Logic", "LocalStorage"],
      demoLink: "https://alperdog.github.io/pet-app",
      githubLink: "https://github.com/AlperDog/pet-app",
      image: "fas fa-paw",
      status: "Live",
      lastUpdated: "2024",
      features: ["Pet Care System", "Interactive UI", "Progress Tracking", "Mobile Responsive"]
    },
    {
      id: 3,
      title: "Cool Navbar",
      description: "An interactive and modern navigation bar with smooth animations and responsive design. Features hover effects and mobile-friendly layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://alperdog.github.io/navbar_cool",
      githubLink: "https://github.com/AlperDog/navbar_cool",
      image: "fas fa-bars",
      status: "Live",
      lastUpdated: "2024",
      features: ["Smooth Animations", "Responsive Design", "Hover Effects", "Mobile Friendly"]
    },
    {
      id: 4,
      title: "Expanding Cards",
      description: "Interactive card gallery with expanding animation effects. Click on cards to see them expand and reveal more content with smooth transitions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://alperdog.github.io/expanding_Cards",
      githubLink: "https://github.com/AlperDog/expanding_Cards",
      image: "fas fa-expand-arrows-alt",
      status: "Live",
      lastUpdated: "2024",
      features: ["Interactive Cards", "Smooth Transitions", "Responsive Layout", "Click Animations"]
    },
    {
      id: 5,
      title: "Progress Steps",
      description: "A step-by-step progress indicator with interactive navigation. Users can move forward and backward through steps with visual feedback.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://alperdog.github.io/progress_Steps",
      githubLink: "https://github.com/AlperDog/progress_Steps",
      image: "fas fa-list-ol",
      status: "Live",
      lastUpdated: "2024",
      features: ["Step Navigation", "Progress Tracking", "Interactive Controls", "Visual Feedback"]
    },
    {
      id: 6,
      title: "Yaz Kursu",
      description: "A summer course website with clean design and user-friendly interface. Features course information and registration functionality.",
      technologies: ["HTML", "CSS"],
      demoLink: "https://alperdog.github.io/YazKursu",
      githubLink: "https://github.com/AlperDog/YazKursu",
      image: "fas fa-graduation-cap",
      status: "Live",
      lastUpdated: "2024",
      features: ["Course Information", "Clean Design", "User Interface", "Registration System"]
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
        <h2 className="section-title">Deployed Projects</h2>
        <p className="text-center text-white-50 mb-5">
          Check out my live projects deployed on GitHub Pages. Each project showcases different aspects of modern web development.
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
                    Live Demo
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
      </div>
    </section>
  );
};

export default DeployedProjects; 