import Section from "./ui/Section";
import { styles } from "../styles";

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Systems that don't lie about what they can do."
  >
    <div className="grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-4">
        <p className={styles.body}>
          I'm a graduate Computer Science student at the University of
          Illinois Chicago, building toward AI/software engineering roles.
          Most of what's on this site is real, working software: a video
          server I benchmarked against five other streaming protocols, a
          governance layer for AI coding agents backed by an actual formal
          model checker, and a multi-phase agentic pipeline that root-causes
          its own failures instead of guessing.
        </p>
        <p className={styles.body}>
          I care about the same thing across every project here: state
          honestly what's built versus scaffolded, back claims with numbers
          instead of adjectives, and separate what a deterministic system can
          prove from what an LLM merely explains. A few of these projects say
          so explicitly in their own READMEs — I've kept that honesty in the
          write-ups below rather than polishing it away.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-surface/60 p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-2 mb-4">
          Currently
        </p>
        <ul className="space-y-3 text-sm text-muted">
          <li>Data Analyst @ UIC College of Medicine</li>
          <li>MS in Computer Science, UIC (2025–2027)</li>
          <li>Based in Chicago, IL</li>
          <li>Open to AI/software engineering roles</li>
        </ul>
      </div>
    </div>
  </Section>
);

export default About;
