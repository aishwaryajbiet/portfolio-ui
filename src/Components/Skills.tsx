import {
  FaJava,
  FaReact,
  FaAws,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiApachekafka,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";

const skillRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "18px",
  marginBottom: "12px",
};

const sectionStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

export default function Skills() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
        Skills
      </h2>

      <div style={sectionStyle}>
        <h3>Backend</h3>
        <div style={skillRowStyle}>
          {FaJava({})} Java (8–17)
        </div>
        <div style={skillRowStyle}>
          {SiSpringboot({})} Spring Boot, Microservices
        </div>

        <h3>Messaging & Streaming</h3>
        <div style={skillRowStyle}>
          {SiApachekafka({})} Apache Kafka
        </div>

        <h3>Frontend</h3>
        <div style={skillRowStyle}>
          {FaReact({})} React, TypeScript
        </div>

        <h3>Cloud & DevOps</h3>
        <div style={skillRowStyle}>
          {FaAws({})} AWS
        </div>
        <div style={skillRowStyle}>
          {SiDocker({})} Docker
        </div>
        <div style={skillRowStyle}>
          {SiKubernetes({})} Kubernetes
        </div>

        <h3>Databases & Tools</h3>
        <div style={skillRowStyle}>
          {FaDatabase({})} MySQL, PostgreSQL, Oracle
        </div>
        <div style={skillRowStyle}>
          {FaGitAlt({})} Git, GitHub, CI/CD
        </div>
      </div>
    </section>
  );
}
