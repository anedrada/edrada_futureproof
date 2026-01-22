export default function CurrentlyLearning() {
  const learningItems = [
    {
      id: 1,
      technology: 'JavaScript',
      description: 'Mastering core JavaScript concepts and modern ES6+ features for building dynamic web applications',
      resources: ['MDN Web Docs', 'Practice Projects', 'Udemy Courses'],
      icon: '⚡'
    },
    {
      id: 2,
      technology: 'React / Next.js',
      description: 'Building modern, responsive web applications with React and learning Next.js for full-stack development',
      resources: ['React Docs', 'freeCodeCamp', 'Hands-on Projects'],
      icon: '⚛️'
    },
    {
      id: 3,
      technology: 'Git & GitHub',
      description: 'Mastering version control, collaboration workflows, and best practices for professional development',
      resources: ['GitHub Docs', 'Git tutorials', 'Real project experience'],
      icon: '🔗'
    }
  ]

  return (
    <section id="learning" className="currently-learning">
      <div className="container">
        <h2>Currently Learning</h2>
        <p className="section-subtitle">
          I'm committed to continuous growth. Here's what I'm working on right now.
        </p>
        
        <div className="learning-grid">
          {learningItems.map(item => (
            <div key={item.id} className="learning-card">
              <div className="learning-icon">{item.icon}</div>
              <h3>{item.technology}</h3>
              <p>{item.description}</p>
              <div className="learning-resources">
                <strong>Resources:</strong>
                <ul>
                  {item.resources.map((resource, idx) => (
                    <li key={idx}>{resource}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-timeline">
          <h3>Learning Goals</h3>
          <div className="goals-list">
            <div className="goal-item">
              <div className="goal-period">Next 3 Months</div>
              <p>Master JavaScript fundamentals and complete React course on freeCodeCamp</p>
            </div>
            <div className="goal-item">
              <div className="goal-period">Next 6 Months</div>
              <p>Build and deploy the Task Management Web Application using React/Next.js</p>
            </div>
            <div className="goal-item">
              <div className="goal-period">This Year</div>
              <p>Become proficient in full-stack development and contribute to open-source projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
