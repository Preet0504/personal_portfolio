import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Hero, Navbar, About } from "./components";
import StarsCanvas from "./components/canvas/Stars";

const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Volunteering = lazy(() => import("./components/Volunteering"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Publications = lazy(() => import("./components/Publications"));
const Certifications = lazy(() => import("./components/Certifications"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className='relative z-0 bg-primary min-h-screen'>
        {/* Full-page star background */}
        <div className='fixed inset-0 z-0 w-full h-full'>
          <StarsCanvas />
        </div>
        
        {/* Content wrapper */}
        <div className='relative z-10'>
          <header className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
            <Navbar />
            <Hero />
          </header>
          <main>
            <About />
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Education />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Volunteering />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Tech />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Works />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Publications />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Resume />
            </Suspense>
            <div className='relative z-0'>
              <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
                <Contact />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
