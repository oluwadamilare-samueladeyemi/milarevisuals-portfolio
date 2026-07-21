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
            <button>View Portfolio</button>

            <button className="outline">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;