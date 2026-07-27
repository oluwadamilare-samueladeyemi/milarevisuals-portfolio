import { useEffect, useState } from "react";
import "./Stats.css";

const stats = [
  {
    number: 250,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 150,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: 5,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.ceil(end / 50);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

function Stats() {
  return (
    <section className="stats-section">
      <h2>Trusted By Clients Across Nigeria</h2>

      <div className="stats-grid">
        {stats.map((item) => (
          <div
            className="stat-card"
            key={item.title}
          >
            <Counter
              end={item.number}
              suffix={item.suffix}
            />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;