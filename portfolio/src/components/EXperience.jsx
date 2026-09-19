import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "Your Company",
    description:
      "Working on modern web applications, APIs and responsive user interfaces.",
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "Your Company",
    description:
      "Developed reusable React components and responsive interfaces.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p>My Journey</p>
          <h2>Experience</h2>
        </div>
        

        <div className="timeline">
          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <FiBriefcase />
              </div>

              <div className="timeline-content">
                <span className="timeline-year">{experience.year}</span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
