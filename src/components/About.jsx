import headshot from "../assets/headshot.webp";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section-spacing px-6 bg-white dark:bg-white/5 scroll-mt-24">
      <div className="content-width grid md:grid-cols-[280px_1fr] gap-6 md:gap-14 items-start">
        <img src={headshot} alt="Jason Gallagher" loading="lazy" decoding="async" width="280" height="280" className="w-40 h-40 md:w-[280px] md:h-[280px] object-cover object-top rounded-full" />
        <div>
          <h2 id="about-title" className="section-title mb-4">Jason Gallagher</h2>
          <p className="text-text-secondary dark:text-text-light/75 mb-5">Marketing leader & curious builder · Colorado</p>
          <p className="text-text-secondary dark:text-text-light/75 leading-relaxed mb-4">
            My marketing leadership experience is in real estate, with earlier
            sales roles in telecom and SMB account management. That work shaped
            how I approach acquisition, lifecycle systems, and sales alignment.
          </p>
          <p className="text-text-secondary dark:text-text-light/75 leading-relaxed">
            I like making things, learning fast, and improving what works.
            Outside campaign work, I build analytics tools and creative experiments.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}
