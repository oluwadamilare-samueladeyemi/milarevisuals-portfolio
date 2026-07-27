import { Link } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <h2>Ready to tell your story?</h2>

      <p>
        Let's create visuals that leave a lasting impression.
      </p>

      <Link to="/contact" className="cta-button">
        Book a Session
      </Link>
    </section>
  );
}

export default CTA;