import headshot from "../assets/headshot.webp";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section-spacing px-6 scroll-mt-24">
      <div className="content-width closing-layout about-layout">
        <img src={headshot} alt="Jason Gallagher" loading="lazy" decoding="async" width="280" height="280" className="about-portrait object-cover object-top" />
        <div>
          <h2 id="about-title" className="section-title mb-4">Jason Gallagher</h2>
          <p className="text-muted mb-5">Marketing leader & curious builder · Colorado</p>
          <p className="text-muted leading-relaxed mb-4">
            My marketing leadership experience is in real estate. Earlier sales
            roles in telecom and SMB account management taught me to build
            programs that work for the people using them.
          </p>
          <p className="text-muted leading-relaxed">
            Outside campaign work, I build analytics tools and creative
            experiments. I like making things, learning fast, and improving what works.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}
