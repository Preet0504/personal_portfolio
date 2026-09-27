import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { styles } from "../styles";
import { CategoryBadge } from "../components/ui/Tag";
import ProjectSection from "../components/ui/ProjectSection";
import projects from "../data/projects";

const linkLabels = {
  repo: "View source on GitHub",
  live: "Open live demo",
  pypi: "View on PyPI",
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div className="pt-32 pb-24">
      <div className={styles.container}>
        <Link to="/projects" className="text-sm text-muted hover:text-white transition-colors">
          ← All projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <CategoryBadge>{project.category}</CategoryBadge>
          <span className="font-mono text-xs text-muted">{project.period}</span>
          <span className="font-mono text-xs text-muted">·</span>
          <span className="text-xs text-muted">{project.role}</span>
        </div>

        <h1 className={`${styles.h2} mt-4 max-w-3xl`}>{project.name}</h1>
        <p className={`${styles.body} mt-4 max-w-3xl text-[17px]`}>{project.tagline}</p>

        {project.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {Object.entries(project.links).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-white hover:border-accent/40 transition-colors"
              >
                {linkLabels[key] || url}
              </a>
            ))}
          </div>
        )}

        {project.metrics && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-border py-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-lg sm:text-xl font-bold text-white">{m.value}</div>
                <div className="text-xs text-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs text-white/85">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 max-w-3xl">
          {project.sections.map((s, i) => (
            <ProjectSection key={i} section={s} />
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-4 border-t border-border pt-8">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="rounded-xl border border-border p-5 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs text-muted">← Newer</p>
              <p className="mt-1 font-semibold text-white">{prev.name}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="rounded-xl border border-border p-5 text-right hover:border-accent/40 transition-colors"
            >
              <p className="text-xs text-muted">Older →</p>
              <p className="mt-1 font-semibold text-white">{next.name}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
