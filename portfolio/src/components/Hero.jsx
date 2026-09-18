import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-small-title">Hello, I'm</p>

          <h1>Chhaya Bind</h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications using
            React, Node.js and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
              <FiArrowDown />
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>

            <a href="mailto:your@email.com">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-placeholder">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
}
