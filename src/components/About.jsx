export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Welcome!</strong> I'm An M. Edrada, a Software Developer with a passion for building reliable, scalable applications that solve real-world problems. My journey in technology began with Java and database management, where I learned the importance of clean architecture and maintainable code.
            </p>
            <p>
              Today, I'm expanding my expertise into modern web development, mastering JavaScript, React, and Next.js. I believe the best software combines technical excellence with thoughtful design—creating tools that are both powerful and intuitive for users.
            </p>
            <p>
              <strong>My Philosophy:</strong> Every project is an opportunity to grow. I'm committed to continuous learning, staying updated with industry best practices, and contributing to the tech community. Whether building backends or frontend interfaces, I bring dedication to understanding user needs and delivering value.
            </p>
            <p>
              <strong>What I Do:</strong> I develop full-stack applications, optimize databases, craft responsive UIs, and implement CI/CD workflows. I'm particularly interested in web development that makes a positive impact.
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
