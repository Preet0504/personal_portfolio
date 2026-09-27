import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
    <p className="font-mono text-accent-2">404</p>
    <h1 className="mt-3 text-2xl font-bold text-white">Page not found</h1>
    <p className="mt-2 text-muted text-sm">The page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white">
      Back home
    </Link>
  </div>
);

export default NotFound;
