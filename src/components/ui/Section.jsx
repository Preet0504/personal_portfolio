import { motion } from "framer-motion";
import { styles } from "../../styles";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`${styles.section} scroll-mt-24 ${className}`}>
      <div className={styles.container}>
        {(eyebrow || title) && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 sm:mb-16 max-w-2xl"
          >
            {eyebrow && (
              <motion.p variants={fadeUp} className={styles.eyebrow}>
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2 variants={fadeUp} className={`${styles.h2} mt-3`}>
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p variants={fadeUp} className={`${styles.body} mt-4`}>
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
