import Section from "./ui/Section";
import skills from "../data/skills";

const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Tools I reach for">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="rounded-2xl border border-border bg-surface/60 p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-2 mb-4">
            {group}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
