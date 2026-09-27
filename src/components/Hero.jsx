import { motion } from "framer-motion";
import { styles } from "../styles";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-border pt-8"
        >
          {[
            ["19+", "shipped projects"],
            ["1", "PyPI package"],
            ["1", "IEEE publication"],
            ["2026", "MS CS @ UIC"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-mono text-2xl font-bold text-white">{n}</div>
              <div className="text-xs text-muted mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
