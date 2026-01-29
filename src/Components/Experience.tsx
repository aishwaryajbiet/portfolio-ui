type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Dell Technologies",
    role: "Software Engineer / QA Automation Engineer",
    period: "2023 – 2025",
    bullets: [
      "Worked on enterprise applications supporting large-scale business workflows.",
      "Collaborated with developers, QA, and stakeholders to validate backend services and APIs.",
      "Contributed to test automation and defect reduction across releases.",
      "Supported production issues and improved release quality through root-cause analysis.",
    ],
    tech: ["Java", "REST APIs", "Selenium", "SQL", "Git", "CI/CD"],
  },
  {
    company: "DXC Technologies",
    role: "Senior QA Automation Engineer",
    period: "2021 – 2023",
    bullets: [
      "Delivered automation for enterprise banking and retail systems with strong SLAs.",
      "Validated event-driven and backend services, ensuring data integrity and reliability.",
      "Worked closely with cross-functional teams in Agile/Scrum environments.",
      "Improved test coverage and reduced regression cycles through automation frameworks.",
    ],
    tech: ["Java", "Selenium", "API Testing", "Kafka (validation)", "Agile", "Jenkins"],
  },
];

export default function Experience() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
        Experience
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {experience.map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "36px",
              paddingBottom: "24px",
              borderBottom: "1px solid #e6e6ef",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>{item.company}</h3>
            <strong>{item.role}</strong>
            <div style={{ color: "#6b6b8a", marginBottom: "12px" }}>
              {item.period}
            </div>

            <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              {item.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {b}
                </li>
              ))}
            </ul>

            <div>
              <strong>Tech:</strong> {item.tech.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
