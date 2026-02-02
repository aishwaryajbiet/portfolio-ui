import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT: TEXT */}
        <div className="hero-text">
          <h1>
            Aishwarya 
            Sri Yenumula
          </h1>

          <p>
            Java Full Stack Engineer building scalable,
            event-driven systems with Spring Boot,
            Kafka, Cloud & modern UI.
          </p>

          <div className="hero-actions">
            <button className="btn primary">View Projects</button>
            <button className="btn secondary">Contact</button>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-image">
          <img src="/images/hero-avatar1.png" alt="Aishwarya Avatar" />
        </div>

      </div>
    </section>
  );
}
