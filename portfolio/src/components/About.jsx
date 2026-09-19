import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiSmartphone,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "8+",
    label: "Technologies",
  },
  {
    number: "1+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Passion",
  },
];

const services = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description:
      "Building modern and responsive interfaces using React, JavaScript and CSS.",
  },
  {
    icon: <FiLayers />,
    title: "UI Development",
    description:
      "Creating clean, accessible and user-friendly digital experiences.",
  },
  {
    icon: <FiDatabase />,
    title: "Backend Development",
    description:
      "Developing REST APIs and server-side applications using Node.js and Express.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Making applications work smoothly across desktop, tablet and mobile devices.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>

          <span className="section-description">
            A little more about my journey, skills and passion
            for development.
          </span>
        </div>

        {/* MAIN ABOUT */}
        <div className="about-main">

          {/* LEFT */}
          <div className="about-intro">

            <div className="about-label">
              <span></span>
              Who I Am
            </div>

            <h3>
              I build digital experiences
              <span> that matter.</span>
            </h3>

            <p>
              I'm a passionate developer who enjoys turning
              ideas into modern, responsive and user-friendly
              web applications.
            </p>

            <p>
              I enjoy working with React, JavaScript, Node.js,
              Express and MongoDB. My goal is to write clean
              code while creating interfaces that are simple,
              useful and enjoyable to use.
            </p>

            <div className="about-checks">

              <div>
                <FiCheckCircle />
                <span>Clean & Maintainable Code</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Responsive Web Applications</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Modern Development Practices</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="about-highlight">

            <div className="highlight-top">
              <span className="highlight-dot"></span>

              <span>
                Currently Learning & Building
              </span>
            </div>

            <div className="highlight-code">

              <span className="code-purple">
                const
              </span>

              <span className="code-white">
                developer
              </span>

              <span className="code-purple">
                =
              </span>

              <span className="code-yellow">
                {" {"}
              </span>

              <div className="code-line">
                <span className="code-blue">
                  skills:
                </span>

                <span className="code-green">
                  "React, Node.js"
                </span>
              </div>

              <div className="code-line">
                <span className="code-blue">
                  database:
                </span>

                <span className="code-green">
                  "MongoDB"
                </span>
              </div>

              <div className="code-line">
                <span className="code-blue">
                  passion:
                </span>

                <span className="code-green">
                  "Web Development"
                </span>
              </div>

              <div className="code-line">
                <span className="code-blue">
                  mindset:
                </span>

                <span className="code-green">
                  "Always Learning"
                </span>
              </div>

              <span className="code-yellow">
                {"}"}
              </span>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="about-stats">

          {stats.map((stat) => (
            <div
              className="stat-card"
              key={stat.label}
            >
              <strong>{stat.number}</strong>

              <span>{stat.label}</span>
            </div>
          ))}

        </div>

        {/* SERVICES */}
        <div className="services-section">

          <div className="services-heading">
            <p>What I Do</p>

            <h3>
              Turning ideas into
              <span> real products.</span>
            </h3>
          </div>

          <div className="services-grid">

            {services.map((service) => (
              <div
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>
                  {service.title}
                </h4>

                <p>
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}