import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fullText = "I’m a software engineer with a strong backend focus who enjoys building systems that are meant to last. I like working close to the core of a system—data pipelines, services, and infrastructure,where design decisions actually matter at scale. Alongside engineering, I’m comfortable working in research-oriented environments. I enjoy reading papers, reproducing results, and translating abstract ideas into practical systems. I approach problems with an interdisciplinary mindset, drawing from computer systems, data, and applied machine learning when needed. I work best in collaborative settings, care deeply about clarity and correctness, and am motivated by solving real problems rather than chasing buzzwords.";

  return (
    <section aria-labelledby="about-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 id="about-heading" className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Overview."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Overview.</span>
          )}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {fullText}
        {/* {isExpanded ? fullText : previewText}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className='ml-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold'
          >
            Read More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className='ml-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold'
          >
            Show Less
          </button>
        )} */}
      </motion.p>
    </section>
  );
};

export default SectionWrapper(About, "about");
