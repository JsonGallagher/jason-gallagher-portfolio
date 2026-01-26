import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:jason@jasongallagher.co"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-text-light/50" />
                  jason@jasongallagher.co
                </a>
              </li>
              <li>
                <a
                  href="tel:5859051130"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-text-light/50" />
                  <span className="translate-y-[1px]">(585) 905-1130</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-text-light/60">
                <MapPin className="w-4 h-4 text-text-light/50" />
                <span className="translate-y-[1px]">Colorado</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-light/70 mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/jsongallagher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-text-light/50" />
                  <span className="translate-y-[1px]">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/heyjson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <XIcon className="w-4 h-4 text-text-light/50" />
                  <span className="translate-y-[1px]">X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JsonGallagher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-text-light/50" />
                  <span className="translate-y-[1px]">GitHub</span>
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
