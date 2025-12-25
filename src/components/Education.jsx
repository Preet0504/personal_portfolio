import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(to right, rgba(88, 28, 135, 0.2), rgba(131, 24, 67, 0.2))",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.3)" }}
      date={edu.date}
      iconStyle={{ 
        background: 'linear-gradient(135deg, #915EFF 0%, #E91E63 100%)',
        boxShadow: '0 0 20px rgba(145, 94, 255, 0.5)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden'>
            <img 
              src={edu.icon} 
              alt={edu.institution}
              className='w-full h-full object-contain rounded-full'
              onError={(e) => {
                const initials = edu.institution.charAt(0);
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<span class='text-primary font-bold text-2xl'>${initials}</span>`;
              }}
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
          {edu.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
      </div>

      <div className='mt-5'>
        <p className='text-white-100 text-[14px] tracking-wider leading-relaxed'>
          {edu.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section aria-labelledby="education-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Journey
        </p>
        <h2 id="education-heading" className={`${styles.sectionHeadText} text-center`}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Education."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Education.</span>
          )}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              edu={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Education, "education");
