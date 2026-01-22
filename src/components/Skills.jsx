export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Authentication']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Prisma ORM']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>✓ {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
