import { Helmet } from "react-helmet-async";
import { useState } from "react";

import useFetch from "../hooks/useFetch";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SearchBar from "../components/SearchBar/SearchBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import "../styles/Projects.css";

function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  // GitHub API endpoint
  const GITHUB_API =
    "https://api.github.com/users/oluwadamilare-samueladeyemi/repos";

  const {
    data: projects,
    isLoading,
    error,
  } = useFetch(GITHUB_API);

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
    return (
      <ErrorMessage
        message="Unable to load GitHub projects. Please try again later."
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Milare Visuals | Projects</title>

        <meta
          name="description"
          content="Browse photography, videography, documentary, and creative media projects by Milare Visuals."
        />
      </Helmet>

      <main className="projects-page">
        <header className="projects-header">
          <h1>My Projects</h1>

          <p>
            Explore a collection of software projects, creative work, and
            technical solutions built by Milare Visuals.
          </p>
        </header>

        <SearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))
          ) : (
            <p className="no-results">
              No projects found matching "{searchQuery}".
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Projects;