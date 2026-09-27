import { motion } from "framer-motion";
import Section, { fadeUp } from "./ui/Section";
import { openSourceContribution as os } from "../data/projects";

const OpenSource = () => (
  <Section id="open-source" eyebrow="Open source" title="Contributing upstream">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl border border-border bg-gradient-to-br from-surface to-surface/40 p-7 sm:p-9"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-xl font-bold text-white">
          {os.name} <span className="text-muted font-normal">({os.role})</span>
        </h3>
        <span className="font-mono text-xs text-muted">{os.period}</span>
      </div>
      <p className="text-sm text-muted mt-3 leading-relaxed max-w-3xl">{os.tagline}</p>
      <ul className="mt-5 space-y-3">
        {os.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
            {h}
          </li>
        ))}
      </ul>
      <a
        href={os.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 hover:text-white transition-colors"
      >
        View the fork on GitHub
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  </Section>
);

export default OpenSource;
