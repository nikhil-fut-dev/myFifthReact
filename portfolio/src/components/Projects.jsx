import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense management application with authentication, income, expenses and dashboard analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Vite to showcase skills and projects.",
    technologies: ["React", "Vite", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Authentication App",
    description:
      "A modern authentication system featuring registration, login, protected routes and user profile.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <span>&lt;/&gt;</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub />
                    GitHub
                  </a>

                  <a href={project.demo}>
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
