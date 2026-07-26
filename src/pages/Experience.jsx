import Timeline from "../components/Timeline/Timeline";
import SkillCard from "../components/SkillCard/SkillCard";

import "../styles/Experience.css";

const skillCategories = [
  {
    title: "Media Production",
    icon: "📷",
    skills: [
      "Photography",
      "Videography",
      "Documentary Production",
      "Content Creation",
      "Camera Operation",
    ],
  },

  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },

  {
    title: "Creative Software",
    icon: "🎨",
    skills: [
      "Adobe Lightroom",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Canva",
      "CapCut",
    ],
  },

  {
    title: "Professional Skills",
    icon: "🤝",
    skills: [
      "Creative Problem Solving",
      "Client Communication",
      "Project Planning",
      "Time Management",
      "Team Collaboration",
    ],
  },
];

function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-hero">
        <h1>Experience & Skills</h1>

        <p>
          A combination of creative media production and modern frontend
          development skills used to deliver high-quality digital experiences.
        </p>
      </section>

      <Timeline />

      <section className="skills-section">
        <h2>Professional Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Experience;