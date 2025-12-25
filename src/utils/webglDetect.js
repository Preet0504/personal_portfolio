// export const checkWebGLSupport = () => {
//   try {
//     const canvas = document.createElement('canvas');
//     const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
//     if (!gl) {
//       return false;
//     }
    
//     // Check if context is functioning
//     const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
//     if (debugInfo) {
//       const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
//       // Check for software renderer or problematic drivers
//       if (renderer && renderer.toLowerCase().includes('swiftshader')) {
//         return false;
//       }
//     }
    
//     return true;
//   } catch (e) {
//     return false;
//   }
// };
