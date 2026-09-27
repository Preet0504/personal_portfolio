import { motion } from "framer-motion";
import { styles } from "../styles";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-noise-grid" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/20 blur-[140px]" />

      <div className={`${styles.container} relative z-10 pt-24`}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.eyebrow}
        >
          Preet Patel, AI Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`${styles.h1} mt-5 max-w-4xl`}
        >
          I build <span className="text-gradient">agentic systems</span> and
          distributed infrastructure that hold up under real load.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`${styles.body} mt-6 max-w-2xl text-[17px]`}
        >
          MS Computer Science student at UIC. I've shipped a governance layer
          for AI coding agents backed by formal model checking, benchmarked a
          LAN video server against HLS/DASH/WebRTC, and contributed real
          async infrastructure to Zulip's open-source codebase, alongside
          production web apps that real users log into every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button to="/projects">View all projects</Button>
          <Button href="/Preet_Resume_Final.pdf" variant="outline">
            Download résumé
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
