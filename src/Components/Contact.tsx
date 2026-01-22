export default function Contact() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "24px" }}>
        Contact
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 32px",
          color: "#4A4A68",
          fontSize: "18px",
          lineHeight: 1.6,
        }}
      >
        Interested in collaborating or discussing opportunities?  
        Feel free to reach out.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:aishwaryajbiet@gmail.com"
          style={{
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
            color: "#2E2E4D",
            fontWeight: 500,
          }}
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/sri-yenumula-aishwarya/"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
            color: "#2E2E4D",
            fontWeight: 500,
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/aishwaryajbiet"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "1px solid #e0e0e0",
            color: "#2E2E4D",
            fontWeight: 500,
          }}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
