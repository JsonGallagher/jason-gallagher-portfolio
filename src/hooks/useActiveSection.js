import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        if (window.scrollY < 100) {
          setActiveSection((prev) => (prev !== "" ? "" : prev));
        }
        ticking.current = false;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
