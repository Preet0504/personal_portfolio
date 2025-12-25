import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className='group relative'
    >
      <div className='bg-gradient-to-br from-purple-600 to-pink-600 p-[1px] rounded-2xl sm:w-[360px] w-full h-full'>
        <div 
          onClick={() => window.open(source_code_link, "_blank")}
          className='bg-tertiary p-6 rounded-2xl cursor-pointer hover:bg-tertiary/90 transition-all duration-300 flex flex-col h-full'
        >
          <div className='relative w-full h-[230px] mb-5 rounded-2xl overflow-hidden flex-shrink-0'>
            <div className='absolute inset-0 bg-white bg-gradient-to-br from-white to-pink-600/20 group-hover:opacity-0 transition-opacity duration-300'></div>
            {image ? (
              <img
                src={image}
                alt={`${name} project screenshot`}
                loading="lazy"
                className='relative z-10 w-50% h-50% object-cover rounded-xl group-hover:scale-110 transition-transform duration-300'
              />
            ) : (
              <div className='w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <span className='text-white text-6xl font-bold opacity-20'>
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div>
            <h3 className='text-white font-bold text-[24px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300'>
              {name}
            </h3>
            <p className='mt-3 text-secondary text-[14px] leading-relaxed'>
              {isExpanded ? description : description.substring(0, 40) + "..."}
              {description.length > 40 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className='ml-2 text-purple-400 hover:text-purple-300 font-semibold'
                >
                  {isExpanded ? "Read less" : "Read "}
                </button>
              )}
            </p>
          </div>

          <div className='mt-5 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] ${tag.color} bg-black/30 px-3 py-1 rounded-full font-medium`}
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

const Works = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section aria-labelledby="projects-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
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

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
