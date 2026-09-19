import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";

import profileImage from "../assets/1762514090977~2.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-small-title">
            Hello, I'm
          </p>

          <h1>
            Chhaya Bind
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web
            applications using React, Node.js and modern web
            technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Work
              <FiArrowDown />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              Download Resume
              <FiDownload />
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:your@email.com"
              aria-label="Email"
            >
              <FiMail />
            </a>

          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero-image">

          <div className="profile-card">

            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}