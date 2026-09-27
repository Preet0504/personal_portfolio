import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]";

const variants = {
  primary: "bg-accent text-white hover:bg-accent/90 shadow-[0_0_0_1px_rgba(108,108,245,0.4)]",
  outline: "border border-border text-white hover:border-white/30 bg-white/[0.02]",
  ghost: "text-muted hover:text-white",
};

const Button = ({ to, href, variant = "primary", className = "", children, ...rest }) => {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
