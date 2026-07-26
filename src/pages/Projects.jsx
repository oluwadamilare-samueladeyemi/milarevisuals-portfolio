import { useState } from "react";

import useFetch from "../hooks/useFetch";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SearchBar from "../components/SearchBar/SearchBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(
    "https://api.github.com/users/oluwadamilare-samueladeyemi/repos"
  );

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className="projects-page">
      <h1>My Projects</h1>

      <SearchBar
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}

export default Projects;