import "./Timeline.css";
import { useEffect } from "react";

const timelineData = [
  {
    year: "2021",
    title: "Milare Visuals Founded",
    description:
      "Started Milare Visuals with a focus on photography and visual storytelling.",
  },
  {
    year: "2022",
    title: "First Wedding Coverage",
    description:
      "Completed the first professional wedding photography project.",
  },
  {
    year: "2023",
    title: "Expanded Services",
    description:
      "Added videography, documentaries and content creation services.",
  },
  {
    year: "2024",
    title: "100+ Happy Clients",
    description:
      "Reached over one hundred satisfied clients across multiple event categories.",
  },
  {
    year: "2025",
    title: "Professional Media Brand",
    description:
      "Providing complete media coverage for individuals, businesses and organizations.",
  },
];

function Timeline() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">My Journey</h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`timeline-card ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <span className="year">{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;