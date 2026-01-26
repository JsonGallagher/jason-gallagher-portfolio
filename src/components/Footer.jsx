export default function Footer() {
  return (
    <footer className="bg-primary-dark text-text-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg uppercase tracking-tight mb-4">
              Jason Gallagher
            </h3>
            <p className="text-text-light/60 leading-relaxed max-w-md">
              Growth Marketer. Demand gen, AI strategy, and marketing
              automation. 12+ years building systems that drive pipeline and
              revenue.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-light/70 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:jason@jasongallagher.co"
                  className="hover:text-text-light/70 transition-colors"
                >
                  jason@jasongallagher.co
                </a>
              </li>
              <li>
                <a
                  href="tel:5859051130"
                  className="hover:text-text-light/70 transition-colors"
                >
                  (585) 905-1130
                </a>
              </li>
              <li className="text-text-light/60">Colorado</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-light/70 mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/jsongallagher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-light/70 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/heyjson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-light/70 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JsonGallagher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-light/70 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-sm text-text-light/60">
          © {new Date().getFullYear()} Jason Gallagher. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
