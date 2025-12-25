// import React, { useState, useEffect } from 'react';
// import { checkWebGLSupport } from '../../utils/webglDetect';

// const SafeCanvas = ({ children, fallback }) => {
//   const [webglSupported, setWebglSupported] = useState(null);

//   useEffect(() => {
//     setWebglSupported(checkWebGLSupport());
//   }, []);

//   if (webglSupported === null) {
//     return fallback || <div className="w-full h-full" />;
//   }

//   if (!webglSupported) {
//     return fallback || <div className="w-full h-full" />;
//   }

//   return <>{children}</>;
// };

// export default SafeCanvas;
