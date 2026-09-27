import Section from "./ui/Section";
import certifications from "../data/certifications";

const Certifications = () => (
  <Section id="certifications" eyebrow="Certifications" title="Credentials">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certifications.map((c, i) => (
        <a
          key={i}
          href={c.credential_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-border bg-surface/60 p-5 hover:border-accent/40 transition-colors"
        >
          <p className="font-semibold text-white text-sm leading-snug">{c.title}</p>
          <p className="text-xs text-muted mt-2">
            {c.issuer} · {c.date}
          </p>
        </a>
      ))}
    </div>
  </Section>
);

export default Certifications;
