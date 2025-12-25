// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     if (import.meta.env.DEV) {
//       console.log('3D Canvas Error:', error, errorInfo);
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback || null;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
