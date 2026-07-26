import "./Timeline.css";

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
      "Added videography, documentaries, and content creation services.",
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
      "Offering complete media coverage for individuals, businesses, and organizations.",
  },
];

function Timeline() {
  return (
    <section className="timeline">
      <h2>My Journey</h2>

      {timelineData.map((item) => (
        <div className="timeline-item" key={item.year}>
          <div className="year">{item.year}</div>

          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Timeline;