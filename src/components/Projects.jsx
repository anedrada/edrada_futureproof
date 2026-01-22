export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and beautiful UI.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays real-time weather data with interactive charts and forecasts.',
      tags: ['React', 'API Integration', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, comments, and social sharing capabilities.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A sleek portfolio website showcasing projects and skills with smooth animations and responsive design.',
      tags: ['React', 'CSS3', 'Framer Motion'],
      link: '#'
    },
    {
      id: 6,
      title: 'Music Streaming App',
      description: 'A music streaming application with playlist management, user authentication, and audio player controls.',
      tags: ['React', 'Node.js', 'WebSocket'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={`https://via.placeholder.com/300x200?text=${project.title}`} 
                  alt={project.title}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="button" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
