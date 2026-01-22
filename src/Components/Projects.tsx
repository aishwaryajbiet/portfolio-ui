type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Event-Driven Order Processing System",
    description:
      "Designed a scalable microservices system using Kafka for asynchronous order events, ensuring high throughput and fault tolerance.",
    tech: ["Java", "Spring Boot", "Kafka", "REST", "Docker"],
  },
  {
    title: "Banking Notifications Platform",
    description:
      "Built a real-time notification service handling millions of messages using Kafka topics, consumer groups, and schema validation.",
    tech: ["Kafka", "Schema Registry", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Cloud-Native Portfolio Platform",
    description:
      "Developed a modern React + TypeScript portfolio with clean architecture, reusable components, and deployment-ready setup.",
    tech: ["React", "TypeScript", "UI Architecture"],
  },
];

export default function Projects() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
        Projects
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              marginBottom: "32px",
              padding: "24px",
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{project.title}</h3>
            <p style={{ marginBottom: "12px", lineHeight: 1.6 }}>
              {project.description}
            </p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </div>
        ))}
      </div>
    </section>
  );
}
