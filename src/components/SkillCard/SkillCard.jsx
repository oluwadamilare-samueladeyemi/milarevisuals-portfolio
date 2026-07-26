import "./SkillCard.css";

function SkillCard({ icon, title, skills }) {
  return (
    <article className="skill-card">
      <div className="skill-header">
        <span className="skill-icon">{icon}</span>

        <h3>{title}</h3>
      </div>

      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>✓ {skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;