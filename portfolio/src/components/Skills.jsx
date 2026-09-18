import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    name: "React",
    percentage: 90,
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    percentage: 88,
    icon: <FaJs />,
  },
  {
    name: "Node.js",
    percentage: 82,
    icon: <FaNodeJs />,
  },
  {
    name: "HTML",
    percentage: 95,
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    percentage: 90,
    icon: <FaCss3Alt />,
  },
  {
    name: "Git",
    percentage: 80,
    icon: <FaGitAlt />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p>My Expertise</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <div className="skill-name">
                  <span className="skill-icon">{skill.icon}</span>

                  <h3>{skill.name}</h3>
                </div>

                <span>{skill.percentage}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
