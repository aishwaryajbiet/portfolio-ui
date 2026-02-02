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
            born and raised in portland, oregon, i have soft spots for used books
            (the best ones come with annotations + bookmarks), black coffee, and
            all things green! outside of work, you can usually find me
            experimenting with tofu, trying new boba places, worrying about my
            carbon footprint, or making pointillist portraits.
          </p>
        </div>
      </div>
    </section>
  );
}
