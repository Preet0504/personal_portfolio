import { motion } from "framer-motion";
import Section, { fadeUp } from "./ui/Section";
import publications from "../data/publications";

const Publications = () => (
  <Section id="publications" eyebrow="Publications" title="Research">
    <div className="space-y-6">
      {publications.map((pub, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-bold text-white text-[17px]">{pub.title}</h3>
            <span className="font-mono text-xs text-muted whitespace-nowrap">{pub.date}</span>
          </div>
          <p className="text-sm text-accent-2 mt-1">{pub.conference}</p>
          <p className="text-xs text-muted mt-1">{pub.authors}</p>
          <p className="text-sm text-muted mt-3 leading-relaxed">{pub.description}</p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 hover:text-white transition-colors"
          >
            Read on IEEE Xplore
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Publications;
