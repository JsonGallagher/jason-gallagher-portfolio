import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../App";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { href: "#expertise", label: "Case studies" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
const sectionIds = [...navLinks.map((link) => link.href.slice(1)), "projects"];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMobileMenuOpen(false);
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-primary dark:bg-primary-dark border-b divider"
    >
      <div className="content-width flex justify-between items-center gap-4">
        <a href="#main-content" className="font-semibold text-sm sm:text-lg tracking-tight uppercase">Jason Gallagher</a>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-current={activeSection === link.href.slice(1) ? "location" : undefined} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com/in/jsongallagher" target="_blank" rel="noopener noreferrer" className="nav-link hidden lg:inline-flex">LinkedIn</a>
          <button onClick={toggleDarkMode} className="icon-button" aria-label="Toggle dark mode" aria-pressed={darkMode}>
            {darkMode ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
          <button ref={menuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="icon-button lg:hidden" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} aria-hidden="true" className="lg:hidden fixed inset-0 top-[76px] bg-black/20 z-40" />
          <div id="mobile-navigation" className="lg:hidden absolute top-full left-0 right-0 bg-primary dark:bg-primary-dark border-t divider py-4 px-6 z-50 max-h-[calc(100dvh-76px)] overflow-y-auto">
            <ul className="flex flex-col gap-1 mb-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={activeSection === link.href.slice(1) ? "location" : undefined} className="nav-link !text-lg">{link.label}</a>
                </li>
              ))}
              <li><Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="nav-link !text-lg">Projects</Link></li>
            </ul>
            <div className="flex flex-wrap gap-x-6 pt-3 border-t divider">
              <a href="https://linkedin.com/in/jsongallagher" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
              <a href="mailto:jason@jasongallagher.co" className="text-link">Email me</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
