import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CATEGORIES = ["AI/ML & Data", "Software & Web", "Mini Projects"];

const CATEGORY_META = {
  "AI/ML & Data": {
    icon: "🤖",
    subtitle: "Machine learning, data pipelines, and AI-powered tools",
  },
  "Software & Web": {
    icon: "🌐",
    subtitle: "Full-stack applications and web platforms",
  },
  "Mini Projects": {
    icon: "⚡",
    subtitle: "Quick experiments and fun builds",
  },
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative"
    >
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-[1px] rounded-2xl sm:w-[340px] w-full h-full">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="bg-tertiary p-6 rounded-2xl cursor-pointer hover:bg-tertiary/90 transition-all duration-300 flex flex-col h-full"
        >
          <div className="relative w-full h-[200px] mb-5 rounded-2xl overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-white bg-gradient-to-br from-white to-pink-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
            {image ? (
              <img
                src={image}
                alt={`${name} project`}
                loading="lazy"
                className="relative z-10 w-full h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-300 p-4"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-6xl font-bold opacity-20">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-bold text-[20px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 leading-snug">
              {name}
            </h3>
            <p className="mt-3 text-secondary text-[13px] leading-relaxed">
              {isExpanded ? description : description.substring(0, 80) + (description.length > 80 ? "..." : "")}
              {description.length > 80 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="ml-2 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[11px] ${tag.color} bg-black/30 px-3 py-1 rounded-full font-medium`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category, categoryProjects }) => {
  const [isOpen, setIsOpen] = useState(category !== "Mini Projects");
  const meta = CATEGORY_META[category];

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{meta.icon}</span>
          <div className="text-left">
            <h3 className="text-white font-bold text-[20px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
              {category}
            </h3>
            <p className="text-secondary text-[13px] mt-0.5">{meta.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-purple-400 font-medium bg-purple-900/40 px-3 py-1 rounded-full">
            {categoryProjects.length} project{categoryProjects.length !== 1 ? "s" : ""}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-purple-400 text-xl font-bold"
          >
            ▾
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-6 flex flex-wrap gap-6 px-1">
              {categoryProjects.map((project, index) => (
                <ProjectCard
                  key={`project-${project.name}`}
                  index={index}
                  {...project}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Works = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const grouped = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = projects.filter((p) => p.category === cat);
    return acc;
  }, {});

  return (
    <section aria-labelledby="projects-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 id="projects-heading" className={`${styles.sectionHeadText}`}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Projects."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Projects.</span>
          )}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A collection of projects that reflect my skills across different domains — from AI pipelines and knowledge graphs to full-stack web apps. Click any card to explore the code or live demo.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {CATEGORIES.map((category) => (
          <CategorySection
            key={category}
            category={category}
            categoryProjects={grouped[category] || []}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
