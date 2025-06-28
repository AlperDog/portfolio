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
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

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
    { name: 'Frontend', icon: 'fas fa-desktop', color: '#61DAFB' },
    { name: 'Backend', icon: 'fas fa-server', color: '#339933' },
    { name: 'Database', icon: 'fas fa-database', color: '#4caf50' },
    { name: 'Tools', icon: 'fas fa-tools', color: '#F05032' },
    { name: 'Design', icon: 'fas fa-palette', color: '#aa00ff' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

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
    <section id="skills" className="skills-section-easy py-5">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-center text-white-50 mb-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
          Explore my core skills by category. Click a tab to view details.
        </p>
        {/* Category Tabs */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`btn ${activeCategory === category.name ? 'btn-custom' : 'btn-outline-light'} btn-sm`}
              style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                padding: '0.5em 1.2em',
                borderRadius: '999px',
                fontWeight: 600
              }}
            >
              <i className={`${category.icon} me-2`} style={{ color: category.color }}></i>
              {category.name}
            </button>
          ))}
        </div>
        {/* Skills Grid - compact, expandable chips */}
        <div className="row g-3 justify-content-center skills-grid-row">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="col-6 col-md-4 col-lg-3 col-xl-3">
              <div
                className={`skill-chip-easy card-custom text-center h-100 p-2 ${expandedSkill === skill.name ? 'expanded' : ''}`}
                style={{
                  borderTop: `3px solid ${skill.color}`,
                  boxShadow: isVisible ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
                  transition: 'all 0.4s',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 0.07}s`,
                  position: 'relative',
                  background: 'rgba(30,30,40,0.92)',
                  cursor: 'pointer',
                  minHeight: expandedSkill === skill.name ? 170 : 90,
                  zIndex: expandedSkill === skill.name ? 2 : 1
                }}
                onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                tabIndex={0}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                aria-expanded={expandedSkill === skill.name}
                aria-label={skill.name + (expandedSkill === skill.name ? ' details expanded' : '')}
              >
                <div className="mb-1" style={{ fontSize: '2rem', color: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <div className="fw-bold text-white mb-1" style={{ fontSize: '1rem' }}>{skill.name}</div>
                {expandedSkill === skill.name && (
                  <>
                    <div className="d-flex justify-content-center align-items-center mb-2" style={{ gap: '0.5em' }}>
                      <i className={`${getLevelIcon(skill.level)}`} style={{ color: getLevelColor(skill.level), fontSize: '1em' }}></i>
                      <span className="badge" style={{ backgroundColor: getLevelColor(skill.level), color: 'white', fontSize: '0.8em', padding: '0.2em 0.7em' }}>{skill.level}</span>
                    </div>
                    <p className="text-white-50 small mb-0" style={{ fontSize: '0.95em', lineHeight: 1.5 }}>{skill.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Professional Strengths - compact row */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3 strengths-easy">
              <div className="strength-card-easy">
                <i className="fas fa-lightbulb"></i>
                <span>Problem Solving</span>
              </div>
              <div className="strength-card-easy">
                <i className="fas fa-users"></i>
                <span>Teamwork</span>
              </div>
              <div className="strength-card-easy">
                <i className="fas fa-rocket"></i>
                <span>Fast Learning</span>
              </div>
              <div className="strength-card-easy">
                <i className="fas fa-code"></i>
                <span>Clean Code</span>
              </div>
              <div className="strength-card-easy">
                <i className="fas fa-mobile-alt"></i>
                <span>Responsive Design</span>
              </div>
              <div className="strength-card-easy">
                <i className="fas fa-clock"></i>
                <span>Time Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 