import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My professional background</p>
        <h2 className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Resume."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Resume.</span>
          )}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='mt-10 w-full flex flex-col items-center'
      >
        <div className='w-full max-w-4xl h-[800px] bg-tertiary rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl relative group'>
          <iframe
            src="https://drive.google.com/file/d/1SrJNsz-VIDNfcoc7uZuu-JAeaZVhtVYK/preview"
            className='w-full h-full border-none'
            title="Preet Patel Resume"
            allow="autoplay"
          />
          
          <div className='absolute top-4 right-4 flex gap-2'>
            <a
              href="https://drive.google.com/file/d/1SrJNsz-VIDNfcoc7uZuu-JAeaZVhtVYK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#915EFF] hover:bg-[#804dee] text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm shadow-lg'
            >
              Open in Drive
            </a>
          </div>
        </div>

        <p className='mt-5 text-secondary text-[14px] text-center max-w-3xl'>
          Note: If the viewer doesn't load, use the button above to open it directly in Google Drive.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
