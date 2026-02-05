import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, FolderGit2, Library, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../App";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection([
    "about",
    "expertise",
    "experience",
    "skills",
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-semibold text-lg tracking-tight uppercase">
          Jason Gallagher
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-text-primary dark:text-text-light hover:opacity-60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/projects"
              className="flex items-end gap-1.5 text-sm font-medium text-text-primary dark:text-text-light hover:opacity-60 transition-colors translate-y-[1px]"
            >
              <FolderGit2 className="w-4 h-4 translate-y-[-2.5px]" />
              <span className="translate-y-[1px]">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/shelf"
              className="flex items-end gap-1.5 text-sm font-medium text-text-primary dark:text-text-light hover:opacity-60 transition-colors translate-y-[1px]"
            >
              <Library className="w-4 h-4 translate-y-[-2.5px]" />
              <span className="translate-y-[1px]">Shelf</span>
            </Link>
          </li>
        </ul>

        {/* Right side: LinkedIn + Dark mode toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop LinkedIn */}
          <a
            href="https://linkedin.com/in/jsongallagher"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn btn-secondary text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span className="translate-y-[1.5px]">LinkedIn</span>
          </a>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-black/10 dark:bg-white/10" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-text-light" />
            ) : (
              <Moon className="w-5 h-5 text-text-primary" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-primary dark:bg-primary-dark border-t border-black/10 dark:border-white/10 py-6 px-6 z-50"
            >
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-lg font-medium ${
                      activeSection === link.href.slice(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1 text-lg font-medium"
                >
                  <FolderGit2 className="w-5 h-5" />
                  <span className="translate-y-[1px]">Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shelf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1 text-lg font-medium"
                >
                  <Library className="w-5 h-5" />
                  <span className="translate-y-[1px]">Shelf</span>
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 pt-4 border-t border-black/10 dark:border-white/10">
              <a
                href="https://linkedin.com/in/jsongallagher"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary justify-center"
              >
                <Linkedin className="w-4 h-4" />
                <span className="translate-y-[1.5px]">LinkedIn</span>
              </a>
              <a
                href="mailto:jason@jasongallagher.co"
                className="btn btn-primary justify-center"
              >
                <Mail className="w-4 h-4" />
                <span className="translate-y-[1.5px]">Email Me</span>
              </a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
