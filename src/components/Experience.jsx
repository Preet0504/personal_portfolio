import { motion } from "framer-motion";
import Section, { fadeUp } from "./ui/Section";
import experience from "../data/experience";
import { socials } from "../data/nav";

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've worked"
    subtitle={
      <>
        Full history, references, and recommendations on{" "}
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-2 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        .
      </>
    }
  >
    <div className="relative border-l border-border pl-8 space-y-10">
      {experience.map((job, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-bold text-white">{job.title}</h3>
            <span className="font-mono text-xs text-muted">{job.date}</span>
          </div>
          <p className="text-sm font-medium text-accent-2 mt-0.5">{job.company}</p>
          <ul className="mt-3 space-y-2">
            {job.points.map((p, j) => (
              <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted/60" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Experience;
