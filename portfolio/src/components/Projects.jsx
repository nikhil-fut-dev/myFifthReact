import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import expenseTracker from "../assets/projects/expense-tracker.svg";
import authentication from "../assets/projects/authentication.svg";
import portfolio from "../assets/projects/portfolio.svg";

const projects = [
  {
    number: "01",
    title: "Expense Tracker",
    description:
      "A full-stack expense management application where users can manage income, expenses, budgets and financial analytics.",
    image: expenseTracker,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
    type: "Full Stack",
  },

  {
    number: "02",
    title: "Authentication App",
    description:
      "A secure authentication application with registration, login, protected routes and user profile management.",
    image: authentication,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
    type: "Web App",
  },

  {
    number: "03",
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Vite to showcase skills, projects and experience.",
    image: portfolio,
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "#",
    type: "Frontend",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* SECTION HEADING */}
        <div className="section-heading">
          <p>What I've Built</p>
          <h2>Featured Projects</h2>
          <span className="section-description">
            A selection of projects I've worked on using modern web
            technologies.
          </span>
        </div>

        {/* PROJECTS */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              {/* PROJECT PREVIEW */}
              <div className="project-preview">
                <img src={project.image} alt={`${project.title} preview`} />

                <div className="preview-overlay">
                  <span>{project.type}</span>
                </div>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <FiArrowUpRight className="project-arrow" />
                </div>

                <p className="project-description">{project.description}</p>

                {/* TECHNOLOGIES */}
                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link live-link"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ALL PROJECTS BUTTON */}
        <div className="all-projects">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            View More Projects
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
