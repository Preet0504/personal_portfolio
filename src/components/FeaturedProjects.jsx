import { motion } from "framer-motion";
import Section, { fadeUp } from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";
import Button from "./ui/Button";
import projects from "../data/projects";

const featuredSlugs = ["lanflix", "uce", "causeway", "grace"];

const FeaturedProjects = () => {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Recent projects"
      subtitle="17 shipped projects, in chronological order, each with its own case study — architecture, real numbers, and the bugs that were actually found and fixed."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 text-center">
        <Button to="/projects" variant="outline">
          See all 17 projects
        </Button>
      </motion.div>
    </Section>
  );
};

export default FeaturedProjects;
