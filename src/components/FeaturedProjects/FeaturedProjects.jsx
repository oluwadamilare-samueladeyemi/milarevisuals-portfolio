import { Link } from "react-router-dom";

import "./FeaturedProjects.css";

const featuredProjects = [
  {
    title: "Wedding Photography",
    image:
      "https://picsum.photos/600/400?random=11",
  },

  {
    title: "Portrait Session",
    image:
      "https://picsum.photos/600/400?random=12",
  },

  {
    title: "Documentary Production",
    image:
      "https://picsum.photos/600/400?random=13",
  },
];

function FeaturedProjects() {
  return (
    <section className="featured">

      <h2>Featured Projects</h2>

      <div className="featured-grid">

        {featuredProjects.map((project) => (

          <article
            key={project.title}
            className="featured-card"
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <Link to="/projects">
              View Portfolio
            </Link>

          </article>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProjects;