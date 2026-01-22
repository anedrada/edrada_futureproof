export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p>Crafted with ❤️ using React</p>
      </div>
    </footer>
  )
}
