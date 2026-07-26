import { Link, useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

import "../styles/ProjectDetails.css";

function ProjectDetails() {
  // Read the repository name from the URL.
  const { id } = useParams();

  const {
    data: project,
    isLoading,
    error,
  } = useFetch(
    `https://api.github.com/repos/oluwadamilare-samueladeyemi/${id}`
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className="project-details">
      <Link className="back-button" to="/projects">
        ← Back to Projects
      </Link>

      <h1>{project.name}</h1>

      <p>
        <strong>Description:</strong>{" "}
        {project.description || "No description available."}
      </p>

      <p>
        <strong>Language:</strong>{" "}
        {project.language || "Not specified"}
      </p>

      <p>
        <strong>Stars:</strong> {project.stargazers_count}
      </p>

      <p>
        <strong>Forks:</strong> {project.forks_count}
      </p>

      <p>
        <strong>Visibility:</strong> {project.visibility}
      </p>

      <a
        href={project.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View Repository on GitHub
      </a>
    </main>
  );
}

export default ProjectDetails;