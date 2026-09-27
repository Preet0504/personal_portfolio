import { Link } from "react-router-dom";
import { socials } from "../data/nav";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-content mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Preet Patel. Built from scratch, no template.
      </p>
      <div className="flex items-center gap-6 text-sm text-muted">
        <Link to="/projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          GitHub
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          LinkedIn
        </a>
        <a href={socials.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          Résumé
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
