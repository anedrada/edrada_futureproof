export default function FeaturedProjects() {
  const bigThree = [
    {
      id: 1,
      title: 'Student Management System',
      category: 'Technical Mastery',
      description: 'A comprehensive software application that allows users to add, update, and delete student records. Demonstrates my understanding of programming fundamentals, data management, and structured code.',
      tags: ['Java', 'MySQL', 'Git'],
      impact: 'Shows fundamental skills and database management expertise',
      link: '#'
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      category: 'Growth & Challenge',
      description: 'A responsive website showcasing my projects, skills, and background as a Software Developer. I learned how to structure web pages, apply responsive design, and present technical work clearly online.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      impact: 'Demonstrates adaptability and ability to learn web development',
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management Web Application',
      category: 'Vision & Ambition',
      description: 'A planned web application that helps users organize tasks, deadlines, and priorities efficiently. I\'m excited to learn modern frameworks and create a complete application from development to deployment.',
      tags: ['React', 'Next.js', 'JavaScript', 'Vercel'],
      impact: 'Shows vision to build real-world, interactive applications',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="featured-projects">
      <div className="container">
        <h2>My Journey: The Big Three</h2>
        <p className="section-subtitle">
          Three projects that represent my growth as a developer
        </p>
        <div className="big-three-grid">
          {bigThree.map(project => (
            <div key={project.id} className="big-three-card">
              <div className="card-badge">{project.category}</div>
              <div className="project-image">
                <div className="image-placeholder">{project.id}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="impact-statement">
                  <strong>Why it matters:</strong> {project.impact}
                </p>
                <a href={project.link} className="button">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
