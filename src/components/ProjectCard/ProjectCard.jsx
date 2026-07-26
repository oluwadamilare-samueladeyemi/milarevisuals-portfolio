import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={`https://picsum.photos/seed/${project.id}/600/400`}
        alt={project.name}
      />

      <div className="project-content">
        <h3>{project.name}</h3>

        <p>
          {project.description || "No description available."}
        </p>

        <span className="category">
          {project.language || "Not specified"}
        </span>

        <Link to={`/projects/${project.name}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;