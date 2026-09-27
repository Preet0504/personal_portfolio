import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section, { fadeUp } from "./ui/Section";
import education from "../data/education";

const Education = () => (
  <Section id="education" eyebrow="Education" title="Academic background">
    <div className="grid sm:grid-cols-2 gap-6">
      {education.map((ed, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-border bg-surface/60 p-6"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-bold text-white">{ed.title}</h3>
            <span className="font-mono text-xs text-muted whitespace-nowrap">{ed.date}</span>
          </div>
          <p className="text-sm text-accent-2 mt-1">{ed.institution}</p>
          <p className="text-sm text-muted mt-3 leading-relaxed">{ed.description}</p>
          {ed.thesis && (
            <Link
              to={`/projects/${ed.thesis.slug}`}
              className="mt-4 block rounded-lg border border-border bg-white/[0.03] p-3 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs font-semibold text-accent-2">{ed.thesis.label}</p>
              <p className="text-xs text-muted mt-1 leading-relaxed">{ed.thesis.detail}</p>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Education;
