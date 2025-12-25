// src/components/Tech.jsx
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Skills."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Skills.</span>
          )}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {Object.entries(technologies).map(([category, techs], catIndex) => (
          <div key={category}>
            <motion.h3 
              variants={fadeIn("up", "spring", catIndex * 0.2, 0.75)}
              className="text-white text-xl font-bold mb-6 text-center"
            >
              {category}
            </motion.h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {techs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  variants={fadeIn("up", "spring", (catIndex * 0.5) + (techIndex * 0.1), 0.75)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:ring-4 group-hover:scale-110 group-hover:ring-purple-500/50 group-hover:shadow-lg">
                    {tech.icon ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-primary font-bold text-xl">
                        {tech.name[0]}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-white/80 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
