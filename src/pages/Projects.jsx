import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(
    "https://api.github.com/users/oluwadamilare-samueladeyemi/repos"
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>GitHub Projects</h1>

      <p>Total repositories: {projects.length}</p>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>

          <p>{project.description || "No description provided."}</p>

          <hr />
        </div>
      ))}
    </main>
  );
}

export default Projects;