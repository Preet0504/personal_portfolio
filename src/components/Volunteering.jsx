import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { volunteering } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Typewriter from "typewriter-effect";

const VolunteeringCard = ({ activity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(to right, rgba(88, 28, 135, 0.2), rgba(131, 24, 67, 0.2))",
        color: "#fff",
        border: "1px solid rgba(233, 30, 99, 0.3)",
        borderRadius: "16px",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(233, 30, 99, 0.3)" }}
      date={activity.date}
      iconStyle={{ 
        background: 'linear-gradient(135deg, #E91E63 0%, #915EFF 100%)',
        boxShadow: '0 0 20px rgba(233, 30, 99, 0.5)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center'>
            <img 
              src={activity.icon || (activity.organization.charAt(0))} 
              alt={activity.organization}
              className='w-full h-full object-contain rounded-full'
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
          {activity.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {activity.organization}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {(isExpanded ? activity.points : activity.points.slice(0, 2)).map((point, index) => (
          <li
            key={`volunteering-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>

      {activity.points.length > 2 && (
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

const Volunteering = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section aria-labelledby="volunteering-heading" ref={ref}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Giving back to the community
        </p>
        <h2 id="volunteering-heading" className={`${styles.sectionHeadText} text-center`}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Volunteering & Leadership."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Volunteering & Leadership.</span>
          )}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {volunteering.map((activity, index) => (
            <VolunteeringCard
              key={`volunteering-${index}`}
              activity={activity}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Volunteering, "volunteering");
