export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: [
        'React.js - Building dynamic UIs',
        'JavaScript (ES6+) - Core language expertise',
        'HTML5 & CSS3 - Semantic markup & styling',
        'Responsive Design - Mobile-first approach',
        'UI/UX Principles - User-centered design',
        'Vite - Fast build tooling'
      ]
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        'Java - Object-oriented programming',
        'Database Design - Relational databases',
        'API Development - RESTful principles',
        'Problem Solving - Algorithmic thinking',
        'Code Architecture - Clean, maintainable code',
        'Version Control - Git workflows'
      ]
    },
    {
      category: 'Databases & Data',
      icon: '💾',
      skills: [
        'MySQL - Relational database design',
        'SQL - Complex queries & optimization',
        'Data Modeling - Entity relationships',
        'Database Management - CRUD operations',
        'Data Integrity - Constraints & validation',
        'Performance - Query optimization'
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        'Git & GitHub - Version control & collaboration',
        'VS Code - Professional development environment',
        'Vercel - Modern deployment platform',
        'npm - Package management',
        'Command Line - Terminal proficiency',
        'CI/CD Understanding - Automated workflows'
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <ul>
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>
                    <span className="skill-dot">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
