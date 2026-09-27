// Generic renderer for a project's `sections` array — keeps ProjectDetail
// free of one-off components per project.
const ProjectSection = ({ section }) => {
  const { heading, paragraphs, paragraphs2, list, table } = section;
  return (
    <div className="border-t border-border py-10 first:border-t-0 first:pt-0">
      {heading && <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">{heading}</h2>}

      {paragraphs &&
        paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.8] text-muted mb-4 last:mb-0">
            {p}
          </p>
        ))}

      {table && (
        <div className="my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/[0.03]">
                {table.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-accent-2 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 whitespace-nowrap font-mono text-[13px] ${
                        ci === 0 ? "text-white" : "text-muted"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {paragraphs2 &&
        paragraphs2.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.8] text-muted mt-4 mb-4 last:mb-0">
            {p}
          </p>
        ))}

      {list && (
        <ul className="mt-4 space-y-3">
          {list.map((item, i) => {
            const isObj = typeof item === "object";
            return (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  {isObj ? (
                    <>
                      <span className="font-semibold text-white">{item.title}</span>
                      {item.detail ? <> — {item.detail}</> : null}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProjectSection;
