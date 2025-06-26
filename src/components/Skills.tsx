import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', description: 'Semantic, accessible, and SEO-friendly markup.' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', description: 'Responsive layouts, Flexbox, Grid, and animations.' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', description: 'Modern ES6+, asynchronous programming, DOM manipulation.' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB', description: 'Component-based UI, hooks, and state management.' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', description: 'Backend development, REST APIs, and tooling.' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3', description: 'Rapid prototyping with modern UI components.' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', description: 'Version control, branching, and collaboration.' },
    { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E', description: 'UI/UX design, prototyping, and wireframing.' },
    { name: 'Game Dev', icon: 'fas fa-gamepad', color: '#aa00ff', description: 'Building interactive games and playful experiences.' },
    { name: 'UI/UX Design', icon: 'fas fa-pencil-ruler', color: '#00bcd4', description: 'User-centered design and usability best practices.' },
    { name: 'REST APIs', icon: 'fas fa-plug', color: '#ff9800', description: 'Designing and consuming RESTful services.' },
    { name: 'Agile', icon: 'fas fa-sitemap', color: '#4caf50', description: 'Iterative development and team collaboration.' },
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

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-4 col-md-6">
              <div className="card-custom text-center h-100 p-3" style={{ borderTop: `4px solid ${skill.color}`, boxShadow: isVisible ? '0 4px 24px rgba(0,0,0,0.15)' : 'none', transition: 'box-shadow 0.5s' }}>
                <div 
                  className="mb-3"
                  style={{ 
                    fontSize: '2.5rem', 
                    color: skill.color,
                    animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none' 
                  }}
                >
                  <i className={skill.icon}></i>
                </div>
                <h5 className="text-white mb-2">{skill.name}</h5>
                <p className="text-white-50 small mb-0">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Additional skills section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card-custom">
              <h3 className="h4 text-white mb-4 text-center">What I Bring to the Table</h3>
              <div className="row g-3">
                <div className="col-md-4 text-center">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#aa00ff' }}>
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h5 className="text-white">Creative Problem Solving</h5>
                  <p className="text-white-50 small">Finding innovative solutions to complex challenges</p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#aa00ff' }}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h5 className="text-white">Team Collaboration</h5>
                  <p className="text-white-50 small">Working effectively in diverse team environments</p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#aa00ff' }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h5 className="text-white">Fast Learning</h5>
                  <p className="text-white-50 small">Quickly adapting to new technologies and frameworks</p>
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