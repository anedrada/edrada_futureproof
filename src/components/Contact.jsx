import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always excited to discuss new projects, collaboration opportunities, or just talk about technology. Whether you're interested in my work, have questions, or want to work together, I'd love to hear from you!
          </p>
          
          <div className="contact-grid">
            <div className="contact-form-section">
              <h3>Send Me a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="button">Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Other Ways to Connect</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="method-icon">📧</span>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>your.email@example.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">💼</span>
                  <div className="method-content">
                    <h4>LinkedIn</h4>
                    <p>Connect with me professionally</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">🐙</span>
                  <div className="method-content">
                    <h4>GitHub</h4>
                    <p>Check out my code and projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
