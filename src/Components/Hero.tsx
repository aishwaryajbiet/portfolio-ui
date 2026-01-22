import { theme } from "../theme";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: theme.spacing.sectionPadding,
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <HeroBackdrop />

      <h1
        style={{
          fontSize: "clamp(44px, 6vw, 64px)",
          fontWeight: 800,
          background: theme.colors.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "16px",
        }}
      >
        Aishwarya Sri Yenumula
      </h1>

      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto 32px",
          color: "#555",
          fontSize: "18px",
        }}
      >
        Java Full Stack Engineer building scalable, event-driven systems with
        Spring Boot, Kafka, Cloud & modern UI.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <a href="#projects" className="cta-primary">
          View Projects
        </a>
        <a href="#contact" className="cta-secondary">
          Contact
        </a>
      </div>
    </section>
  );
}
