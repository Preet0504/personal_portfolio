// import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto overflow-hidden pt-16">

      {/* ================= Banner ================= */}
      <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden z-0">
        <img
          src="/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
      </div>

      {/* ================= Foreground Content ================= */}
      <div
        className={`
          relative max-w-7xl mx-auto
          ${styles.paddingX}
          mt-6
          z-20
        `}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8">

          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div
              className="
                relative w-28 h-28
                sm:w-40 sm:h-40
                md:w-48 md:h-48
                rounded-full overflow-hidden
                border-4 border-purple-500
                shadow-2xl
                bg-black
              "
            >
              <img
                src="/preet_pfp.webp"
                alt="Preet Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 pb-2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Preet</span>
            </h1>

            <div className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap gap-x-2`}>
              <span>I</span>
              <Typewriter
                options={{
                  strings: [
                    "design distributed pipelines.",
                    "build scalable applications.",
                    "solve real-world problems.",
                    "am a CS Graduate Student at UIC.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  wrapperClassName: "text-[#915EFF] font-bold",
                  cursorClassName: "text-[#915EFF]",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE 3D (NORMAL FLOW) ================= */}
      {/* <div className="block md:hidden mt-20 h-[380px]">
        <ComputersCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-transparent pointer-events-none" />
      </div> */}

      {/* ================= DESKTOP 3D (ABSOLUTE BACKGROUND) ================= */}
      {/* <div
        className="
          hidden md:block
          absolute inset-x-0
          top-[560px]
          lg:top-[640px]
          h-[420px]
          pointer-events-none
          z-0
        "
      >
        <ComputersCanvas /> */}

        {/* Soft fade */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />
      </div> */}

      {/* Desktop-only spacing reservation */}
      {/* <div className="hidden md:block h-[460px]" /> */}

    </section>
  );
};

export default Hero;
