import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ index, title, authors, date, conference, description, link }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-500/60 p-8 rounded-2xl w-full transition-all'
    >
      <h3 className='text-white font-bold text-[18px] line-clamp-2'>
        {title}
      </h3>
      <p className='text-secondary text-[14px] mt-3'>
        {authors}
      </p>
      <p className='text-purple-400 text-[13px] mt-2 font-semibold'>
        {conference}
      </p>
      <p className='text-secondary text-[14px] mt-3'>
        {isExpanded ? description : description.substring(0, 250) + "..."}
        {description.length > 250 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className='ml-2 text-purple-400 hover:text-purple-300 font-semibold'
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <div className='mt-5 flex justify-between items-center'>
        <span className='text-secondary text-[12px]'>
          {date}
        </span>
        <div className='flex gap-2'>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='text-purple-400 hover:text-purple-300 text-[12px] font-semibold transition-colors'
          >
            View →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Research Contributions</p>
        <h2 id="publications-heading" className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Publications."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Publications.</span>
          )}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Peer-reviewed research and technical publications focused on distributed systems, Bayesian inference, and vehicular networks.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7 justify-start'>
        {publications.map((publication, index) => (
          <PublicationCard
            key={`publication-${index}`}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, "publications");
