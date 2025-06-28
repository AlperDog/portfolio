import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      color: '#61DAFB', 
      description: 'Component-based architecture, hooks, state management, and modern React patterns.',
      level: 'Expert'
    },
    { 
      name: 'TypeScript', 
      icon: 'fab fa-js-square', 
      color: '#3178C6', 
      description: 'Type-safe development, interfaces, generics, and advanced TypeScript features.',
      level: 'Advanced'
    },
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js-square', 
      color: '#F7DF1E', 
      description: 'ES6+, async/await, DOM manipulation, and modern JavaScript patterns.',
      level: 'Expert'
    },
    { 
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      color: '#339933', 
      description: 'Backend development, REST APIs, Express.js, and server-side logic.',
      level: 'Advanced'
    },
    { 
      name: 'HTML5', 
      icon: 'fab fa-html5', 
      color: '#E34F26', 
      description: 'Semantic markup, accessibility, SEO optimization, and modern HTML standards.',
      level: 'Expert'
    },
    { 
      name: 'CSS3', 
      icon: 'fab fa-css3-alt', 
      color: '#1572B6', 
      description: 'Flexbox, Grid, animations, responsive design, and modern CSS techniques.',
      level: 'Advanced'
    },
    { 
      name: 'Bootstrap', 
      icon: 'fab fa-bootstrap', 
      color: '#7952B3', 
      description: 'Rapid prototyping, responsive components, and modern UI development.',
      level: 'Advanced'
    },
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      color: '#F05032', 
      description: 'Version control, branching strategies, collaboration, and CI/CD workflows.',
      level: 'Advanced'
    },
    { 
      name: 'REST APIs', 
      icon: 'fas fa-plug', 
      color: '#ff9800', 
      description: 'API design, integration, authentication, and third-party service consumption.',
      level: 'Advanced'
    },
    { 
      name: 'Real-time Communication', 
      icon: 'fas fa-broadcast-tower', 
      color: '#00bcd4', 
      description: 'WebSocket, Socket.io, real-time data synchronization, and live features.',
      level: 'Intermediate'
    },
    { 
      name: 'Database Design', 
      icon: 'fas fa-database', 
      color: '#4caf50', 
      description: 'MongoDB, data modeling, CRUD operations, and database optimization.',
      level: 'Intermediate'
    },
    { 
      name: 'UI/UX Design', 
      icon: 'fas fa-pencil-ruler', 
      color: '#aa00ff', 
      description: 'User-centered design, responsive layouts, accessibility, and modern UX principles.',
      level: 'Advanced'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return '#28a745';
      case 'Advanced': return '#17a2b8';
      case 'Intermediate': return '#ffc107';
      default: return '#6c757d';
    }
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-center text-white-50 mb-5" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
          A comprehensive skill set focused on modern web development technologies and best practices.
        </p>
        <div className="row g-3 g-md-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-12 col-sm-6 col-lg-4">
              <div className="card-custom text-center h-100 p-3" style={{ 
                borderTop: `4px solid ${skill.color}`, 
                boxShadow: isVisible ? '0 4px 24px rgba(0,0,0,0.15)' : 'none', 
                transition: 'box-shadow 0.5s',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`
              }}>
                <div 
                  className="mb-3"
                  style={{ 
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                    color: skill.color,
                    animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none' 
                  }}
                >
                  <i className={skill.icon}></i>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="text-white mb-0" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{skill.name}</h5>
                  <span 
                    className="badge"
                    style={{
                      backgroundColor: getLevelColor(skill.level),
                      color: 'white',
                      fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                      padding: '0.25rem 0.5rem'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-white-50 small mb-0" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card-custom">
              <h3 className="h4 text-white mb-4 text-center" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)' }}>Professional Strengths</h3>
              <div className="row g-3">
                <div className="col-6 col-md-3 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>Problem Solving</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>Analytical thinking and creative solutions</p>
                </div>
                <div className="col-6 col-md-3 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>Team Collaboration</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>Effective communication and teamwork</p>
                </div>
                <div className="col-6 col-md-3 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>Fast Learning</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>Quick adaptation to new technologies</p>
                </div>
                <div className="col-6 col-md-3 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>Clean Code</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)' }}>Maintainable and scalable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 