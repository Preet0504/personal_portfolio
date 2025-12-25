import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      date={experience.date}
      iconStyle={{ 
        background: 'linear-gradient(135deg, #915EFF 0%, #E91E63 100%)',
        boxShadow: '0 0 20px rgba(145, 94, 255, 0.5)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center'>
            <img 
              src={experience.icon} 
              alt={experience.company_name}
              className='w-full h-full object-contain rounded-full'
              onError={(e) => {
                const initials = experience.company_name.charAt(0);
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
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {(isExpanded ? experience.points : experience.points.slice(0, 2)).map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.points.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='mt-3 text-purple-400 hover:text-purple-300 transition-colors text-[14px] font-semibold'
        >
          {isExpanded ? "Show Less −" : "Show More +"}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section aria-labelledby="experience-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 id="experience-heading" className={`${styles.sectionHeadText} text-center`}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Work Experience."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Work Experience.</span>
          )}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
