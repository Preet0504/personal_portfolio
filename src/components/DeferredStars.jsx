import { lazy, Suspense, useState, useEffect } from 'react';

const StarsCanvas = lazy(() => import('./canvas/Stars'));

const DeferredStars = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return <div className="w-full h-full absolute inset-0 bg-transparent" />;
  }

  return (
    <Suspense fallback={<div className="w-full h-full absolute inset-0 bg-transparent" />}>
      <StarsCanvas />
    </Suspense>
  );
};

export default DeferredStars;
