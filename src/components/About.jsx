export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to my portfolio! I'm An M. Edrada, a Software Developer dedicated to building reliable applications and continuously improving my problem-solving skills. My journey started with Java and database management, and I'm now expanding into modern web development with JavaScript, React, and Next.js.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating applications that solve real problems. I'm passionate about learning new technologies and applying them to build scalable, user-friendly solutions.
            </p>
            <p>
              Currently, I'm focused on mastering full-stack web development while maintaining strong fundamentals in software engineering. I'm committed to continuous growth and love exploring how technology can make a positive impact.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/300x300?text=Your+Photo" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
          </div>
        </div>
      </div>
    </section>
  )
}
