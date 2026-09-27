import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CategoryBadge } from "./Tag";
import { fadeUp } from "./Section";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-4">
        <CategoryBadge>{project.category}</CategoryBadge>
        <span className="font-mono text-xs text-muted shrink-0">{project.period}</span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-white group-hover:text-accent-2 transition-colors">
        <Link to={`/projects/${project.slug}`}>
          <span className="absolute inset-0" aria-hidden="true" />
          {project.name}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
        {project.tagline}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="mt-auto pt-5 border-t border-border inline-flex items-center gap-1 text-sm font-medium text-accent-2 relative z-10 pointer-events-none">
        Read the case study
        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </motion.div>
  );
};

export default ProjectCard;
