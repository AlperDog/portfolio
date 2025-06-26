import React, { useState } from 'react';
import TaskManager from './TaskManager';
import Stopwatch from './Stopwatch';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
  isInteractive?: boolean;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Social Media Hashtag Trend Analyzer",
      description: "A fullstack web application that analyzes trending hashtags across multiple social media platforms (Twitter, YouTube, Instagram) in real-time. Features advanced analytics, sentiment analysis, AI-powered predictions, and interactive data visualization. Currently in development with real-time data collection and modern UI/UX.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Twitter API", "YouTube API", "Natural Language Processing", "Data Visualization"],
      demoLink: "https://github.com/AlperDog/hashtag-analyzer",
      githubLink: "https://github.com/AlperDog/hashtag-analyzer",
      image: "fas fa-hashtag"
    },
    {
      id: 2,
      title: "Virtual Pet App",
      description: "A mobile-style, dark-themed virtual pet game built with React & Bootstrap 5. Tracks hunger, energy, and happiness – with hidden surprises and evolving mechanics. Clean code, fun UI, interactive design.",
      technologies: ["React", "Bootstrap 5", "Game Logic", "Responsive UI"],
      demoLink: "https://alperdog.github.io/pet-app/",
      githubLink: "https://github.com/AlperDog/pet-app",
      image: "fas fa-paw"
    },
    {
      id: 3,
      title: "Stopwatch App",
      description: "A precise stopwatch application with lap timing functionality. Features start/stop controls, lap recording, and millisecond accuracy. Perfect for timing workouts, races, or any activity that requires precise time measurement.",
      technologies: ["React", "TypeScript"],
      demoLink: "https://alperdog.github.io/stopwatch-app",
      githubLink: "https://github.com/AlperDog/stopwatch-app",
      image: "fas fa-stopwatch",
      isInteractive: true
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Features Kanban board, priority levels, and local storage persistence.",
      technologies: ["React", "TypeScript", "Bootstrap", "LocalStorage", "CRUD"],
      demoLink: "https://AlperDog.github.io/task-manager-app",
      githubLink: "https://github.com/AlperDog/task-manager-app",
      image: "fas fa-tasks"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps using multiple weather APIs. Features location-based weather data and 5-day forecasts.",
      technologies: ["React", "TypeScript", "Weather API", "Geolocation", "Bootstrap"],
      demoLink: "https://AlperDog.github.io/weather-dashboard-app",
      githubLink: "https://github.com/AlperDog/weather-dashboard-app",
      image: "fas fa-cloud-sun"
    }
  ];

  const handleProjectClick = (project: Project) => {
    if (project.isInteractive) {
      setActiveProject(activeProject === project.title ? null : project.title);
    }
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card-custom h-100 project-card">
                <div className="text-center mb-4">
                  <div 
                    className="mb-3"
                    style={{ 
                      fontSize: '4rem', 
                      color: '#aa00ff',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <i className={project.image}></i>
                  </div>
                </div>
                <h3 className="h5 text-white mb-3">{project.title}</h3>
                <p className="text-white-50 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h6 className="text-white mb-2">Technologies Used:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="badge"
                        style={{
                          backgroundColor: 'rgba(170, 0, 255, 0.2)',
                          color: '#aa00ff',
                          border: '1px solid rgba(170, 0, 255, 0.3)',
                          fontSize: '0.8rem'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.isInteractive ? (
                  <div className="d-flex gap-2 mt-auto">
                    <button 
                      className="btn btn-custom btn-sm flex-fill"
                      onClick={() => handleProjectClick(project)}
                    >
                      <i className="fas fa-play me-2"></i>
                      {activeProject === project.title ? 'Close Demo' : 'Try Demo'}
                    </button>
                    <a 
                      href={project.githubLink}
                      className="btn btn-outline-light btn-sm flex-fill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-2"></i>
                      Code
                    </a>
                  </div>
                ) : (
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
                      Code
                    </a>
                  </div>
                )}
                
                {/* Interactive Project Demo */}
                {project.isInteractive && activeProject === project.title && (
                  <div className="mt-4 pt-4 border-top border-secondary">
                    {project.title === "Task Management App" && <TaskManager />}
                    {project.title === "Stopwatch App" && <Stopwatch />}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card-custom">
              <h3 className="h4 text-white mb-3">Want to See More?</h3>
              <p className="text-white-50 mb-4">
                I'm constantly working on new projects and improving my skills. 
                Let's collaborate on something amazing!
              </p>
              <button className="btn btn-custom" onClick={() => window.open('https://wa.me/905069510808', '_blank')}>
                <i className="fab fa-whatsapp me-2"></i>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 