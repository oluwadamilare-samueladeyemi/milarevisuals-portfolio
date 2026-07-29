import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">
            Complete media coverage for a fast-moving world.
          </p>

          <h1>
            Capturing Stories Through
            <span> Powerful Visuals</span>
          </h1>

          <p className="hero-description">
            Milare Visuals provides professional photography,
            videography, documentary production, content creation,
            and digital media solutions for individuals,
            businesses, and organizations.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View Portfolio
            </Link>

            <Link to="/contact" className="btn outline">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;