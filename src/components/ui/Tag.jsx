export const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted whitespace-nowrap">
    {children}
  </span>
);

export const CategoryBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-2 border border-accent/20">
    {children}
  </span>
);

export default Tag;
