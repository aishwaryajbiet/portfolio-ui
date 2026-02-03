import "./About.css";

const images = [
  "/images/about1.jpeg",
  "/images/about2.jpeg",
  "/images/about3.jpeg",
  "/images/about4.jpeg",
  "/images/about5.jpeg",
  "/images/about6.jpeg",
];

export default function AboutSection() {
  return (
    <section className="about-wrapper">
      <div className="about-header">
        <h2>about</h2>
        <span>a little bit more about me :)</span>
      </div>

      <div className="about-layout">
        <div className="about-images">
          {images.map((src, i) => (
            <div className="about-polaroid" key={i}>
              <img src={src} alt={`about-${i}`} />
            </div>
          ))}
        </div>

        <div className="about-text">
          <p>
           Beyond code, I’m someone who values creativity and balance. I love painting as a way to slow down and think visually, cooking as a form of experimentation and comfort, and being a proud plant mom, which has taught me patience, consistency, and care—skills that surprisingly translate well into engineering.

I believe great software is built at the intersection of technical excellence, curiosity, and thoughtful problem-solving, and I’m always excited to keep learning, building, and growing—both professionally and personally 🌱
          </p>
        </div>
      </div>
    </section>
  );
}
