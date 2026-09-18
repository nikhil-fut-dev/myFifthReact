import { FiUser, FiCode, FiLayers, FiZap } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="about-card">
              <FiUser />
              <h3>Creative Developer</h3>
              <p>Turning ideas into beautiful digital experiences.</p>
            </div>
          </div>

          <div className="about-content">
            <h3>I create digital experiences that make an impact.</h3>

            <p>
              I'm a passionate developer who enjoys creating clean, modern and
              scalable web applications. I love learning new technologies and
              solving real-world problems through code.
            </p>

            <p>
              My focus is on writing maintainable code, creating responsive
              interfaces and delivering great user experiences.
            </p>

            <div className="about-features">
              <div>
                <FiCode />
                <span>Clean Code</span>
              </div>

              <div>
                <FiLayers />
                <span>Modern UI</span>
              </div>

              <div>
                <FiZap />
                <span>Fast Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
