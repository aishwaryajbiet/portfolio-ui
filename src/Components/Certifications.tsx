type Certification = {
  name: string;
  provider: string;
  link: string;
};

const certifications: Certification[] = [
  {
    name: "Databases and SQL for Data Science with Python",
    provider: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODI0NzYwM180NjU4NDE0MTc0NTUxMTg2NDQwOS5wbmciLCJ1c2VybmFtZSI6IkFpc2h3YXJ5YSBTcmkgWWVudW11bGEifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4309%2FIntroduction%2520to%2520SQL%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1511408888807661344&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVNypMMncNN3YJCE6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAObdPtlBAAAA",
  },
  {
    name: "AI Python for Beginners",
    provider: "DeepLearning.AI",
    link: "https://learn.deeplearning.ai/accomplishments/72062cc2-91bb-4ef5-a133-b2e930a12d5c?usp=sharing",
  },
  {
    name: "GCP Databricks Platform Architect",
    provider: "Databricks",
    link: "https://credentials.databricks.com/436ea9d9-22a9-4bf6-8aed-151ed254b4de#acc.GPoLTH3E",
  },
  {
    name: "Azure Databricks Platform Architect",
    provider: "Databricks",
    link: "https://credentials.databricks.com/c14fcb58-31af-444e-b2d4-951e653c5e68#acc.QYhtd80A",
  },
  {
    name: "AWS Databricks Platform Architect",
    provider: "Databricks",
    link: "https://credentials.databricks.com/57616ffa-a568-4d81-b3ca-dc4b5fb8fb21#acc.IYcFz3GJ",
  },
  {
    name: "AI Security Fundamentals",
    provider: "Databricks",
    link: "https://credentials.databricks.com/1fec8232-7b68-401f-a9c8-359c81ff40c8#acc.Qf0cp9tN",
  },
  {
    name: "Multi-AI Agent Systems with CrewAI",
    provider: "CrewAI",
    link: "https://www.crewai.com",
  },
  {
    name: "Building Production AI Agents with Training & Evaluation",
    provider: "CrewAI",
    link: "https://www.crewai.com",
  },
   {
    name: "Introduction to FinOps",
    provider: "FinOps Foundation, a Linux Foundation program",
    link: "http://verify.skilljar.com/c/frnuohsxzjv8",
  },
];

export default function Certifications() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "40px" }}>
        Certifications
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <ul style={{ paddingLeft: "20px" }}>
          {certifications.map((cert, idx) => (
            <li key={idx} style={{ marginBottom: "12px", lineHeight: 1.6 }}>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#2E2E4D",
                }}
              >
                <strong>{cert.name}</strong>
              </a>{" "}
              — {cert.provider}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
