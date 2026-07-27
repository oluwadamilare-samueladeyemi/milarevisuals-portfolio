import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "Milare Visuals captured our wedding beautifully. Every photograph tells a story.",
  },
  {
    name: "David Ade",
    feedback:
      "Professional, punctual and creative from start to finish.",
  },
  {
    name: "Grace Emmanuel",
    feedback:
      "The documentary exceeded our expectations. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Clients Say</h2>

      <div className="testimonial-grid">

        {testimonials.map((client) => (

          <article
            key={client.name}
            className="testimonial-card"
          >

            <p>"{client.feedback}"</p>

            <h4>{client.name}</h4>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;