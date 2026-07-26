import Timeline from "../components/Timeline/Timeline";
import SkillCard from "../components/SkillCard/SkillCard";

import "../styles/Experience.css";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Photography",
  "Videography",
  "Adobe Lightroom",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Canva",
  "CapCut",
  "Video Editing",
  "Camera Operation",
  "Responsive Design",
];

function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-hero">
        <h1>Experience & Skills</h1>

        <p>
          My journey as a media professional and frontend developer, combining
          creativity with modern web technologies.
        </p>
      </section>

      <Timeline />

      <section className="skills-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Experience;