import React, { useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      alert("Email service is not configured. Please contact the site owner directly.");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Preet Patel",
          from_email: form.email,
          to_email: "preetpatelworks@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          if (import.meta.env.DEV) {
            console.error(error);
          }

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      ref={ref}
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-500/60 p-8 rounded-2xl w-full transition-all'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          {inView ? (
            <Typewriter
              options={{
                strings: ["Contact."],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 100,
                wrapperClassName: "text-white",
              }}
            />
          ) : (
            <span className="opacity-0">Contact.</span>
          )}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col group'>
            <span className='text-white font-medium mb-4 group-focus-within:text-purple-400 transition-colors'>Your Name</span>
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-500'></div>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='relative w-full bg-black/40 backdrop-blur-xl py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-purple-500/50 transition-all font-medium'
              />
            </div>
          </label>
          <label className='flex flex-col group'>
            <span className='text-white font-medium mb-4 group-focus-within:text-purple-400 transition-colors'>Your email</span>
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-500'></div>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='relative w-full bg-black/40 backdrop-blur-xl py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-purple-500/50 transition-all font-medium'
              />
            </div>
          </label>
          <label className='flex flex-col group'>
            <span className='text-white font-medium mb-4 group-focus-within:text-purple-400 transition-colors'>Your Message</span>
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-500'></div>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='relative w-full bg-black/40 backdrop-blur-xl py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-purple-500/50 transition-all font-medium resize-none'
              />
            </div>
          </label>

          <button
            type='submit'
            className='relative group/btn overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 py-3 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-[0_0_20px_rgba(145,94,255,0.3)] hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] transition-all active:scale-95'
          >
            <span className='relative z-10 flex items-center gap-2'>
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <svg className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              )}
            </span>
            <div className='absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300'></div>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-primary rounded-2xl">
            <div className="text-white">Loading...</div>
          </div>
        }>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
