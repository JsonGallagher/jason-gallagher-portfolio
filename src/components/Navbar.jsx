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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-primary dark:bg-primary-dark border-b border-black/10 dark:border-white/10"
    >
      <div className="content-width flex justify-between items-center gap-4">
        <a href="#main-content" className="font-semibold text-sm sm:text-lg tracking-tight uppercase">Jason Gallagher</a>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-current={activeSection === link.href.slice(1) ? "location" : undefined} className={`inline-flex items-center min-h-[44px] text-sm font-medium transition-colors ${activeSection === link.href.slice(1) ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-700 dark:hover:text-blue-300"}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li><Link to="/projects" className="inline-flex items-center min-h-[44px] text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Projects</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com/in/jsongallagher" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center min-h-[44px] text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">LinkedIn</a>
          <button onClick={toggleDarkMode} className="p-3 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" aria-label="Toggle dark mode" aria-pressed={darkMode}>
            {darkMode ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
          <button ref={menuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2.5 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} aria-hidden="true" className="lg:hidden fixed inset-0 top-[76px] bg-black/20 z-40" />
          <div id="mobile-navigation" className="lg:hidden absolute top-full left-0 right-0 bg-primary dark:bg-primary-dark border-t border-black/10 dark:border-white/10 py-4 px-6 z-50 max-h-[calc(100dvh-76px)] overflow-y-auto">
            <ul className="flex flex-col gap-1 mb-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={activeSection === link.href.slice(1) ? "location" : undefined} className={`inline-flex items-center min-h-[44px] text-lg font-medium ${activeSection === link.href.slice(1) ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-700 dark:hover:text-blue-300"}`}>{link.label}</a>
                </li>
              ))}
              <li><Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center min-h-[44px] text-lg font-medium hover:text-blue-700 dark:hover:text-blue-300">Projects</Link></li>
            </ul>
            <div className="flex flex-wrap gap-x-6 pt-3 border-t border-black/10 dark:border-white/10">
              <a href="https://linkedin.com/in/jsongallagher" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="mailto:jason@jasongallagher.co" className="social-link">Email me</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
