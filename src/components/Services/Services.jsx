import "./Services.css";

const services = [
  "Photography",
  "Videography",
  "Documentary",
  "Content Creation",
  "Responsive Websites"
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service} className="service-card">
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;