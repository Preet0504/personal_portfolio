import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, issuer, date, credential_id, credential_url, logo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEmoji = (str) => {
    return typeof str === 'string' && /^[\p{Emoji}]$/u.test(str);
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-500/60 p-6 rounded-xl flex flex-col justify-between transition-all'
    >
      <div>
        <div className='flex items-start gap-3'>
          {isEmoji(logo) ? (
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-lg shadow-lg shadow-purple-500/20'>
              {logo}
            </div>
          ) : (
            <div className='w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-lg shadow-white/10 overflow-hidden'>
              <img
                src={logo}
                alt={issuer}
                className='w-full h-full object-contain'
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className='flex-1'>
            <h3 className='text-white font-bold text-[16px]'>
              {title}
            </h3>
            <p className='text-secondary text-[14px] mt-1'>
              {issuer}
            </p>
          </div>
        </div>

        {/* {isExpanded && credential_id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='mt-4 p-3 bg-black/20 rounded-lg border border-purple-500/20'
          >
            <p className='text-secondary text-[12px]'>
              <span className='text-purple-400 font-semibold'>Credential ID:</span> {credential_id}
            </p>
          </motion.div>
        )} */}
      </div>

      <div className='mt-4 flex justify-between items-center flex-wrap gap-2'>
        <span className='text-purple-400 text-[13px] font-semibold'>
          {date}
        </span>
        <div className='flex gap-2'>
          <a
            href={credential_url}
            target="_blank"
            rel="noopener noreferrer"
            className='text-secondary hover:text-white text-[12px] transition-colors underline'
          >
            View Credential
          </a>
          {/* {credential_id && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='text-purple-400 hover:text-purple-300 text-[12px] transition-colors'
            >
              {isExpanded ? "−" : "+"}
            </button>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section aria-labelledby="certifications-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Credentials</p>
        <h2 id="certifications-heading" className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Certifications."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Certifications.</span>
          )}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Industry-recognized certifications demonstrating expertise in cloud platforms, AI/ML, and distributed systems.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Certifications, "certifications");
