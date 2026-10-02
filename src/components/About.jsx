import headshot from "../assets/headshot.webp";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section-spacing px-6 bg-surface scroll-mt-24">
      <div className="content-width grid md:grid-cols-[224px_1fr] gap-6 md:gap-12 items-center">
        <img src={headshot} alt="Jason Gallagher" loading="lazy" decoding="async" width="280" height="280" className="w-40 h-40 md:w-56 md:h-56 object-cover object-top rounded-full" />
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
