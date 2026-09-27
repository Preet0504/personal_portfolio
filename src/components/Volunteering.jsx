import Section from "./ui/Section";
import volunteering from "../data/volunteering";

const Volunteering = () => (
  <Section id="volunteering" eyebrow="Volunteering" title="Beyond engineering">
    <div className="grid sm:grid-cols-3 gap-5">
      {volunteering.map((v, i) => (
        <div key={i} className="rounded-xl border border-border bg-surface/60 p-5">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-semibold text-white text-sm">{v.title}</p>
            <span className="font-mono text-[11px] text-muted">{v.date}</span>
          </div>
          <p className="text-xs text-accent-2 mt-1">{v.organization}</p>
          <ul className="mt-3 space-y-1.5">
            {v.points.map((p, j) => (
              <li key={j} className="text-xs text-muted leading-relaxed">
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Volunteering;
