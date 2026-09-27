import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="pt-32 pb-24">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Projects</p>
        <h1 className={`${styles.h2} mt-3 max-w-2xl`}>
          Everything I've shipped, in chronological order.
        </h1>
        <p className={`${styles.body} mt-4 max-w-2xl`}>
          17 projects, newest first. Each one links to its own case study —
          real architecture, real numbers, and honest limitations, not a
          screenshot and a one-liner.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-mono transition-colors ${
                active === c
                  ? "border-accent bg-accent/10 text-accent-2"
                  : "border-border text-muted hover:text-white hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
