import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-primary/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"}
      `}
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex items-center justify-between h-16`}
      >
        {/* ================= LEFT : LOGO ================= */}
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="text-white text-[20px] font-semibold tracking-wide"
        >
          Preet<span className="text-[#915EFF]">.</span>
        </Link>

        {/* ================= CENTER : NAV LINKS ================= */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`
                text-sm font-medium cursor-pointer
                transition-colors
                ${active === nav.title
                  ? "text-white"
                  : "text-white/60 hover:text-white"}
              `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* ================= RIGHT : SOCIAL ICONS ================= */}
        <div className="hidden md:flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/preet-patel-b229aa247/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Handshake */}
          <a
            href="https://uic.joinhandshake.com/profiles/preet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Handshake"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 660 660">
              <path
                d="M310.8 659c-68.7-4.2-133.1-28.9-186.8-71.9-11.9-9.5-33.8-30.8-43.9-42.6-44.6-52.1-71.1-114.1-78.2-183-1.7-16.4-1.4-52.4.6-69 11.1-94.6 59.7-176.6 137.5-232.2 95.3-68 224.4-78.8 331.6-27.8 54 25.7 101.6 67.4 134.7 118 62.3 95.6 70.4 217.7 21.2 321.1-25.6 54-67.3 101.4-118 134.7-57.8 37.8-129.4 56.8-198.7 52.7z"
              />
              <path
                fill="black"
                d="M186.3 525.8c.3-1.3 15.7-88 34.2-192.8 18.4-104.8 34-192.9 34.6-195.7l1-5.3h75.5l-18.8 106.7c-10.3 58.7-18.6 106.8-18.4 107 .2.3 73.8-59.5 76.3-62 .9-.9 27.3-146.6 27.3-150.8 0-.5 15.2-.9 38.1-.9h38.1l-.5 2.2c-.3 1.3-15.9 89.4-34.6 195.8-18.8 106.4-34.3 194.5-34.6 195.8l-.5 2.2h-75c0-.9 6.8-39.7 15-86.1 8.3-46.5 14.9-84.6 14.7-84.8-.2-.3-73.1 58.9-76.9 62.5-.6.5-19.8 106.4-19.8 109.2 0 .5-15 .9-38.1.9h-38.1z"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Preet0504"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <div className="md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white text-xl focus:outline-none"
          >
            {toggle ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {toggle && (
        <div className="md:hidden bg-primary/95 backdrop-blur border-t border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white/80 text-lg"
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/preet-patel-b229aa247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://uic.joinhandshake.com/profiles/preet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Handshake"
              >
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 660 660">
                  <path
                    d="M310.8 659c-68.7-4.2-133.1-28.9-186.8-71.9-11.9-9.5-33.8-30.8-43.9-42.6-44.6-52.1-71.1-114.1-78.2-183-1.7-16.4-1.4-52.4.6-69 11.1-94.6 59.7-176.6 137.5-232.2 95.3-68 224.4-78.8 331.6-27.8 54 25.7 101.6 67.4 134.7 118 62.3 95.6 70.4 217.7 21.2 321.1-25.6 54-67.3 101.4-118 134.7-57.8 37.8-129.4 56.8-198.7 52.7z"
                  />
                  <path
                    fill="black"
                    d="M186.3 525.8c.3-1.3 15.7-88 34.2-192.8 18.4-104.8 34-192.9 34.6-195.7l1-5.3h75.5l-18.8 106.7c-10.3 58.7-18.6 106.8-18.4 107 .2.3 73.8-59.5 76.3-62 .9-.9 27.3-146.6 27.3-150.8 0-.5 15.2-.9 38.1-.9h38.1l-.5 2.2c-.3 1.3-15.9 89.4-34.6 195.8-18.8 106.4-34.3 194.5-34.6 195.8l-.5 2.2h-75c0-.9 6.8-39.7 15-86.1 8.3-46.5 14.9-84.6 14.7-84.8-.2-.3-73.1 58.9-76.9 62.5-.6.5-19.8 106.4-19.8 109.2 0 .5-15 .9-38.1.9h-38.1z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Preet0504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
