import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'Database';
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skills: Skill[] = [
    // Frontend Skills
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      color: '#61DAFB', 
      description: 'Component-based architecture, hooks, state management, and modern React patterns.',
      level: 'Expert',
      category: 'Frontend'
    },
    { 
      name: 'TypeScript', 
      icon: 'fab fa-js-square', 
      color: '#3178C6', 
      description: 'Type-safe development, interfaces, generics, and advanced TypeScript features.',
      level: 'Advanced',
      category: 'Frontend'
    },
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js-square', 
      color: '#F7DF1E', 
      description: 'ES6+, async/await, DOM manipulation, and modern JavaScript patterns.',
      level: 'Expert',
      category: 'Frontend'
    },
    { 
      name: 'HTML5', 
      icon: 'fab fa-html5', 
      color: '#E34F26', 
      description: 'Semantic markup, accessibility, SEO optimization, and modern HTML standards.',
      level: 'Expert',
      category: 'Frontend'
    },
    { 
      name: 'CSS3', 
      icon: 'fab fa-css3-alt', 
      color: '#1572B6', 
      description: 'Flexbox, Grid, animations, responsive design, and modern CSS techniques.',
      level: 'Advanced',
      category: 'Frontend'
    },
    { 
      name: 'Bootstrap', 
      icon: 'fab fa-bootstrap', 
      color: '#7952B3', 
      description: 'Rapid prototyping, responsive components, and modern UI development.',
      level: 'Advanced',
      category: 'Frontend'
    },
    { 
      name: 'Responsive Design', 
      icon: 'fas fa-mobile-alt', 
      color: '#00bcd4', 
      description: 'Mobile-first approach, cross-browser compatibility, and adaptive layouts.',
      level: 'Advanced',
      category: 'Frontend'
    },

    // Backend Skills
    { 
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      color: '#339933', 
      description: 'Backend development, REST APIs, Express.js, and server-side logic.',
      level: 'Advanced',
      category: 'Backend'
    },
    { 
      name: 'REST APIs', 
      icon: 'fas fa-plug', 
      color: '#ff9800', 
      description: 'API design, integration, authentication, and third-party service consumption.',
      level: 'Advanced',
      category: 'Backend'
    },
    { 
      name: 'Real-time Communication', 
      icon: 'fas fa-broadcast-tower', 
      color: '#00bcd4', 
      description: 'WebSocket, Socket.io, real-time data synchronization, and live features.',
      level: 'Intermediate',
      category: 'Backend'
    },
    { 
      name: 'Express.js', 
      icon: 'fas fa-server', 
      color: '#4caf50', 
      description: 'Web application framework, middleware, routing, and API development.',
      level: 'Advanced',
      category: 'Backend'
    },

    // Database Skills
    { 
      name: 'MongoDB', 
      icon: 'fas fa-database', 
      color: '#4caf50', 
      description: 'NoSQL database, data modeling, CRUD operations, and database optimization.',
      level: 'Intermediate',
      category: 'Database'
    },
    { 
      name: 'Database Design', 
      icon: 'fas fa-sitemap', 
      color: '#9c27b0', 
      description: 'Data modeling, schema design, relationships, and performance optimization.',
      level: 'Intermediate',
      category: 'Database'
    },

    // Tools & Version Control
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      color: '#F05032', 
      description: 'Version control, branching strategies, collaboration, and CI/CD workflows.',
      level: 'Advanced',
      category: 'Tools'
    },
    { 
      name: 'GitHub', 
      icon: 'fab fa-github', 
      color: '#333', 
      description: 'Repository management, pull requests, code review, and project collaboration.',
      level: 'Advanced',
      category: 'Tools'
    },
    { 
      name: 'VS Code', 
      icon: 'fas fa-code', 
      color: '#007acc', 
      description: 'Advanced code editing, debugging, extensions, and development workflow.',
      level: 'Advanced',
      category: 'Tools'
    },

    // Design & UX
    { 
      name: 'UI/UX Design', 
      icon: 'fas fa-pencil-ruler', 
      color: '#aa00ff', 
      description: 'User-centered design, responsive layouts, accessibility, and modern UX principles.',
      level: 'Advanced',
      category: 'Design'
    },
    { 
      name: 'Figma', 
      icon: 'fas fa-palette', 
      color: '#f24e1e', 
      description: 'Design prototyping, wireframing, collaboration, and design systems.',
      level: 'Intermediate',
      category: 'Design'
    },
  ];

  const categories = [
    { name: 'All', icon: 'fas fa-th', color: '#aa00ff' },
    { name: 'Frontend', icon: 'fas fa-desktop', color: '#61DAFB' },
    { name: 'Backend', icon: 'fas fa-server', color: '#339933' },
    { name: 'Database', icon: 'fas fa-database', color: '#4caf50' },
    { name: 'Tools', icon: 'fas fa-tools', color: '#F05032' },
    { name: 'Design', icon: 'fas fa-palette', color: '#aa00ff' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Expert': return 'fas fa-star';
      case 'Advanced': return 'fas fa-star-half-alt';
      case 'Intermediate': return 'far fa-star';
      default: return 'far fa-star';
    }
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-center text-white-50 mb-5" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          A comprehensive skill set focused on modern web development technologies and best practices.
        </p>

        {/* Skills Overview */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card-custom">
              <div className="row text-center">
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#61DAFB' }}>
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>7 Frontend</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Technologies</p>
                </div>
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#339933' }}>
                    <i className="fas fa-server"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>4 Backend</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Technologies</p>
                </div>
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#4caf50' }}>
                    <i className="fas fa-database"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>2 Database</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Technologies</p>
                </div>
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#F05032' }}>
                    <i className="fas fa-tools"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>3 Tools</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Technologies</p>
                </div>
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-palette"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>2 Design</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Technologies</p>
                </div>
                <div className="col-md-2 col-4 mb-3">
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#28a745' }}>
                    <i className="fas fa-star"></i>
                  </div>
                  <h5 className="text-white mt-2" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>18 Total</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2 justify-content-center" style={{ gap: 'clamp(0.5rem, 2vw, 0.75rem) !important' }}>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`btn ${activeCategory === category.name ? 'btn-custom' : 'btn-outline-light'} btn-sm`}
                  style={{ 
                    fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)',
                    padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)'
                  }}
                >
                  <i className={`${category.icon} me-2`} style={{ color: category.color }}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 g-md-4">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card-custom text-center h-100 p-3" style={{ 
                borderTop: `4px solid ${skill.color}`, 
                boxShadow: isVisible ? '0 4px 24px rgba(0,0,0,0.15)' : 'none', 
                transition: 'all 0.5s ease',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                position: 'relative'
              }}>
                {/* Category Badge */}
                <div className="position-absolute top-0 start-0 m-3">
                  <span className="badge bg-secondary" style={{ 
                    fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)',
                    padding: 'clamp(0.2rem, 0.8vw, 0.3rem) clamp(0.4rem, 1.5vw, 0.6rem)'
                  }}>
                    {skill.category}
                  </span>
                </div>

                {/* Skill Icon */}
                <div 
                  className="mb-3"
                  style={{ 
                    fontSize: 'clamp(2rem, 6vw, 3rem)', 
                    color: skill.color,
                    animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none' 
                  }}
                >
                  <i className={skill.icon}></i>
                </div>

                {/* Skill Name and Level */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="text-white mb-0" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{skill.name}</h5>
                  <div className="d-flex align-items-center">
                    <i className={`${getLevelIcon(skill.level)} me-1`} style={{ 
                      color: getLevelColor(skill.level), 
                      fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' 
                    }}></i>
                    <span 
                      className="badge"
                      style={{
                        backgroundColor: getLevelColor(skill.level),
                        color: 'white',
                        fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
                        padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)'
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>

                {/* Skill Description */}
                <p className="text-white-50 small mb-0" style={{ 
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', 
                  lineHeight: '1.5' 
                }}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Professional Strengths */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card-custom">
              <div className="text-center mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: '#aa00ff' }}>
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="h4 text-white mb-4 text-center" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}>Professional Strengths</h3>
              <div className="row g-4">
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Problem Solving</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Analytical thinking and creative solutions</p>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Team Collaboration</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Effective communication and teamwork</p>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Fast Learning</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Quick adaptation to new technologies</p>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Clean Code</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Maintainable and scalable solutions</p>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Responsive Design</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Mobile-first approach and cross-device compatibility</p>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center">
                  <div className="mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#aa00ff' }}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <h5 className="text-white" style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>Time Management</h5>
                  <p className="text-white-50 small" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>Efficient project delivery and deadline adherence</p>
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