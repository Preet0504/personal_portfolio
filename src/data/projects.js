// Chronological (newest first). Each project renders through the generic
// ProjectDetail page via `sections`, see src/components/ui/ProjectSection.jsx.

const projects = [
  {
    slug: "lanflix",
    name: "LANFLIX",
    date: "2026-09-27",
    period: "Sep 2026",
    category: "Distributed Systems",
    tagline:
      "A LAN video server that pushes MP4 segments over one WebSocket instead of polling playlists, benchmarked head to head against HLS, LL-HLS, DASH, WebRTC and raw UDP.",
    role: "Solo build",
    tags: ["Go", "Redis Streams", "Kafka", "WebSocket", "ffmpeg", "MediaSource API"],
    links: {
      repo: "https://github.com/Preet0504/LANFLIX",
    },
    metrics: [
      { label: "Time to first frame", value: "64 ms" },
      { label: "New-media delivery", value: "7 ms median" },
      { label: "Load test", value: "4,196/4,196 segments, 0 mismatches" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Stream any video file to everyone on a Wi-Fi network, with no accounts, no internet, and no app. A host drops a video into a room; viewers open a link, and can rewind, skip, jump to live, or close the tab and resume exactly where they left off tomorrow. Resume state lives server-side, not in browser storage.",
          "Instead of the poll-based segment/playlist model every HLS/DASH player uses, video segments are written to Redis Streams and pushed to the browser over a single persistent WebSocket the instant they exist. Viewer playback positions flow through Kafka into a live dashboard and a retention-analytics consumer.",
        ],
      },
      {
        heading: "How it's built",
        paragraphs: [
          "ffmpeg encodes the upload in real time into fragmented MP4, and a hand-written Go demuxer parses MP4 boxes off the pipe with nothing touching disk. Each segment is XADD'ed into a Redis Stream keyed by presentation timestamp, so Redis doubles as a time index: starting playback at an arbitrary point is an XREVRANGE, following live is a blocking XREAD.",
          "A fan-out hub keeps exactly one Redis tail per live stream no matter how many viewers are attached, and flow control caps how far ahead of a viewer's playhead the server is allowed to push. Those two fixes took it from crashing at 200 viewers and downloading 5x too much data after a seek, to production-shaped behavior.",
        ],
        list: [
          "Custom fragmented-MP4 demuxer reading ffmpeg's stdout box by box (no disk writes)",
          "Redis Streams as both the segment cache and a timestamp-indexed seek structure",
          "Kafka topic plus two independent consumer groups: a live viewer dashboard and a retention-analytics service that can replay from offset 0",
          "Flow-control protocol between player and server: the client grants a rolling 30s window of credit instead of the server pushing unbounded data",
          "Seek epochs to invalidate in-flight pushes from a superseded position, with a regression test for the race",
        ],
      },
      {
        heading: "Benchmarked against HLS, LL-HLS, DASH, WebRTC and raw UDP",
        paragraphs: [
          "One ffmpeg encoder fed six systems bit-identical video via `tee`, so any measured difference is delivery, not encoding. 10 interleaved trials per system, headless Chromium, join points randomized across the segment cycle.",
        ],
        table: {
          headers: ["Metric", "LANFLIX", "HLS (tuned)", "LL-HLS", "DASH (tuned)", "WebRTC"],
          rows: [
            ["Time to first frame", "64 ms", "214 ms", "233 ms", "218 ms", "1.40 s"],
            ["Glass-to-glass latency", "3.11 s", "2.87 s", "914 ms", "3.93 s", "121 ms"],
            ["New-media delivery (median)", "7 ms", "507 ms", "7 ms", "1.60 s", "per packet"],
            ["HTTP requests / min", "1 / session", "240", "717", "196", "1 / session"],
          ],
        },
        paragraphs2: [
          "Honest reading of the results: WebRTC wins latency by 8x but can't rewind or resume. At equal chunk sizes LANFLIX ties LL-HLS on latency while using one socket instead of roughly 717 HTTP requests/min per viewer. Where LANFLIX still loses: seeking is 25 to 31ms vs HLS's 19ms, and there's no adaptive bitrate yet.",
        ],
      },
      {
        heading: "Scaling test: 1 to 200 concurrent viewers on one server",
        table: {
          headers: ["Viewers", "Median delay", "p95", "Server CPU", "Egress"],
          rows: [
            ["1", "4 ms", "17 ms", "0.1%", "3 Mbps"],
            ["50", "24 ms", "35 ms", "3.4%", "133 Mbps"],
            ["200", "89 ms", "230 ms", "12.0%", "570 Mbps"],
          ],
        },
        paragraphs: [
          "Every one of 4,196 segment deliveries across the scaling run was SHA-256 checked against what was published: 0 hash mismatches, 0 connection failures. The first version gave every viewer a blocking Redis read and fell over at 80 concurrent connections, the pool limit; the fan-out hub fixed it.",
        ],
      },
      {
        heading: "Real bugs the benchmark exposed",
        list: [
          "Seeks stuck behind up to 11s of stale pushed data, fixed with a seek-epoch protocol that drops writes from superseded streams and has its own regression test.",
          "A 30,000-attempt/sec CPU-burning retry loop when the browser's SourceBuffer quota filled, because the player was evicting the wrong range and retrying instantly.",
          "Streams froze after roughly 8 minutes because ffmpeg's carriage-return progress output exceeded bufio.Scanner's token limit and silently blocked the pipe.",
          "The codec string was hard-coded instead of parsed from the stream's own avcC/mp4a boxes.",
        ],
      },
      {
        heading: "Stated limitations",
        paragraphs: [
          "No auth, which is fine for a home LAN but not an office network. Single Redis/server instance: the design shards by stream but that isn't built. One rendition, no ABR. iPhone Safari can't play yet, since it only offers ManagedMediaSource, which the player doesn't use.",
        ],
      },
    ],
  },

  {
    slug: "grace",
    name: "GRACE",
    date: "2026-09-20",
    period: "Sep 2026",
    category: "AI Agents & Tooling",
    tagline:
      "A four-phase agentic workflow that diagnoses why a multi-subagent Claude Code project keeps failing, and stages targeted prompt fixes for the one subagent actually responsible, not the one where the failure surfaced.",
    role: "Solo build",
    tags: ["Claude Agent SDK", "Multi-agent orchestration", "Python", "Prompt engineering"],
    links: {
      repo: "https://github.com/Preet0504/GRACE",
    },
    metrics: [
      { label: "Pipeline", value: "4 phases, 2 worker subagent types" },
      { label: "Fan-out", value: "1 causal-localizer per trace" },
      { label: "Output", value: "Staged, diffable prompt revisions" },
    ],
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "When a Claude Code project that dispatches work across subagents fails, the failure almost never surfaces where it started. A verifier rejects a patch for the fifth time, but the verifier is fine; a router three steps earlier sent the task to the wrong fixer. Reading transcripts by hand doesn't scale, and the instinct to make the failing component stricter usually adds responsibility to a component that was already doing its job, leaving the real defect in place.",
          "GRACE treats a project's subagent structure as a dependency graph, an execution dependency graph or EDG, and replaces guesswork with a repeatable four-phase procedure: model the structure, summarize every trace deterministically, backtrack from each failure to its true origin, then synthesize a scoped fix.",
        ],
      },
      {
        heading: "The four-phase pipeline",
        list: [
          "Phase 0, /run_grace (Haiku 4.5): a hard validation gate. Confirms the target has real subagents and real traces before anything else runs.",
          "Phase 1, /create_structural_model (Sonnet 5): parses every subagent's frontmatter and body plus the orchestrator, classifying each as a decision-maker or executor and building a plain edge-list EDG of components, data edges, and control edges with the exact evidence line.",
          "Phase 2, /select_representative_traces (Sonnet 5): generates a deterministic trace-parsing script, scores every component on failure severity and EDG cascade impact (how many downstream components depend on it), and picks a handful of non-redundant failing traces per bottleneck.",
          "Phase 3, /locate_root_causes (Sonnet 5 parent plus N causal-localizer subagents): fans out one worker per representative trace. Each walks backwards through state-changing steps and attributes blame under a fixed priority order, defaulting to the router, with the burden of proof on blaming the executor instead.",
          "Phase 4, /apply_fixes (Haiku 4.5 parent handing off to a fix-synthesizer subagent): assembles an isolated briefing packet of root causes and local trace excerpts only, not the accumulated reasoning of phases 1 to 3, and stages revised prompts under hard constraints, so an executor gets one clearer task, never a new responsibility.",
        ],
      },
      {
        heading: "Design decisions that matter",
        list: [
          "GRACE never touches the target project: every phase writes only under its own runs/ directory, and Phase 4 stages revisions rather than applying them, so a human diffs and copies over deliberately.",
          "Runs are versioned and immutable, so re-running a phase never destroys a prior diagnosis and you can compare run-001 against run-004 after a fix lands.",
          "Phase 3's self-check is load-bearing: if the root-cause set is identical to the failure-manifestation set, GRACE flags it as suspicious overlap instead of quietly declaring success, a signal that the backtracking didn't actually happen.",
          "Attribution has a fixed priority order (router first), specifically to stop fixes from piling onto whichever component happened to be holding the failure when it was noticed.",
        ],
      },
      {
        heading: "Non-goals, stated up front",
        paragraphs: [
          "GRACE does not run or modify the target project, does not auto-apply prompt changes, and does not invent traces. If a target has no usable traces, the workflow stops at Phase 0 rather than guessing.",
        ],
      },
    ],
  },

  {
    slug: "sage",
    name: "SAGE, Self-correction Analysis and Guidance Engine",
    date: "2026-09-20",
    period: "Sep 2026",
    category: "AI Agents & Tooling",
    tagline:
      "Where GRACE traces multi-agent hand-off failures, SAGE goes one level deeper: it root-causes a single agent's own reasoning inside one continuous session, with no orchestrator to blame and often no failing test to start from.",
    role: "Solo build",
    tags: ["Claude Agent SDK", "Session forensics", "Python", "Root cause analysis"],
    links: {
      repo: "https://github.com/Preet0504/GRACE/tree/self-correction-mining",
    },
    metrics: [
      { label: "Confirmed root causes", value: "43 across 2 real sessions" },
      { label: "Spread beyond origin file", value: "67%" },
      { label: "Cross-adjudication agreement", value: "87%" },
    ],
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "A coding session can pass its final check while still wasting real work along the way: a CSS rule written against a variable that doesn't exist, a bug diagnosed wrong twice before the real cause is found, a feature shipped without noticing it needed a second file changed. None of that shows up in a pass/fail signal, so it's never measured, and what's never measured never gets fixed. SAGE exists to make that cost visible, attributable to an exact transcript line, and convert it directly into a guidance rule that prevents it from recurring.",
        ],
      },
      {
        heading: "A five-phase pipeline over a real session transcript",
        list: [
          "Provenance Reconstruction: rebuilds every touched file's content purely from the session's own Read/Edit/Write calls and chains edits that land on the same region. A chain of length ten or more is exactly where a root cause is worth looking for.",
          "Signal Detection: scans the agent's own words, not its code, for language signaling a reversal, an unverified assumption, overbuilding, or a scope surprise, with word-boundary matching so a phrase can't fire by accident inside an unrelated word. This phase only produces candidates, never conclusions.",
          "Evidence Assembly: turns raw candidates into bounded, readable packets of before/after snippets and folded tool output, with duplicates merged. Nothing reaches a verdict without appearing here first.",
          "Root Cause Adjudication: applies a fixed test to every candidate (plan fault vs execution fault; a real commitment vs the agent thinking out loud; would the outcome differ if this one step were done right). Most candidates are rejected here; a rejection is the check working, not a miss.",
          "Causal Tracing: walks backward to the real instruction that set a confirmed root cause in motion (skipping bare approvals like 'sounds good, go ahead') and forward to every file the mistake went on to touch.",
        ],
      },
      {
        heading: "A six-type defect taxonomy, built from real transcripts",
        table: {
          headers: ["Code", "Type", "What it means"],
          rows: [
            ["C", "Unverified Leap", "Code written against a belief that was never checked, almost always the largest, highest-leverage category"],
            ["B", "Discarded Work", "Something built, then undone or replaced once it turned out wrong"],
            ["F", "Hidden Scope", "The agent's own words name something its plan never accounted for"],
            ["P", "Procedural Slip", "An edit attempted before the file had been read this session"],
            ["D", "Overbuild", "More mechanism built than the task needed, then stripped back"],
            ["A", "Confirmed Failure", "A real, checkable failure the transcript shows this step caused"],
          ],
        },
      },
      {
        heading: "Validated two ways, not just asserted",
        paragraphs: [
          "Against constructed ground truth: a synthetic session with four events of known root-cause type plus three deliberate traps designed to look like a hit but not be one. Phases 1 and 2 recovered all four, with zero false credit given to any trap.",
          "Against a second, independent read: two separate adjudication passes over the same 46 candidates, each starting cold with no memory of the other, agreed on confirm/reject 87% of the time and on root-cause type every single time they both confirmed the same instance.",
        ],
      },
      {
        heading: "Results across two real sessions",
        table: {
          headers: ["", "Session 1", "Session 2", "Combined"],
          rows: [
            ["File regions touched", "165", "296", "461"],
            ["Confirmed root causes", "16", "27", "43"],
            ["Spread beyond origin file", "9", "20", "29 (67%)"],
          ],
        },
        paragraphs2: [
          "The strongest synthesized rule, to verify an external contract before writing code that depends on it, is backed by 19 separate confirmed instances in a single session alone. The weakest is kept in the list with an explicit note that only one instance supports it, rather than dressed up with false confidence.",
        ],
      },
      {
        heading: "What this doesn't claim, kept in, not smoothed over",
        paragraphs: [
          "An earlier trial tried to measure whether synthesized rules change agent behavior via an A/B test on a short task, and it was deliberately excluded from the results above: a session's trajectory can't be replayed, so the trial ended up measuring a small fixed overhead with nothing for the rules to have prevented. That's documented as a flaw in the trial, not a finding about the rules, with the full reasoning kept in the repo rather than quietly dropped.",
          "Scope is stated honestly: two sessions is a small corpus, one of them rests on a single adjudication pass rather than two, and the six root-cause types are a first pass grounded in real transcripts but not yet tested against a larger or more varied corpus.",
        ],
      },
    ],
  },

  {
    slug: "causeway",
    name: "Causeway",
    date: "2026-09-17",
    period: "Sep 2026",
    category: "AI Agents & Tooling",
    tagline:
      "Mines symptom-to-fault paths from public repository history, an agentic pipeline where a model may never invent a fact about the code, because every claim has to cite a retrieved, hashed piece of evidence or the write path rejects it.",
    role: "Solo build",
    tags: ["Scala 3", "MCP", "Neo4j", "SootUp", "JaCoCo", "Docker"],
    links: {
      repo: "https://github.com/Preet0504/causeway",
    },
    metrics: [
      { label: "MCP tools", value: "48 catalogued / 45 served" },
      { label: "Reasoning agents", value: "6, one question each" },
      { label: "Observed path steps", value: "94.2%" },
    ],
    sections: [
      {
        heading: "What it produces",
        paragraphs: [
          "Given a public GitHub repo URL, Causeway returns a structured dataset of historical bugs. For each one, it records not just where the fault was and what the user observed, but the actual route connecting them: the ordered sequence of code locations a defect propagated through, from the wrong line to the observed behavior. Where the bug can be reproduced, that route isn't argued for, it's executed, and every hop in it is a method that actually ran.",
          "This is deliberately not fault localization: Causeway knows both endpoints (the fix commit names the fault; the linked issue names the symptom) and the deliverable is the unknown path between them. That makes it pathfinding, not search.",
        ],
      },
      {
        heading: "The architectural principle",
        paragraphs: [
          "A strict division of labor: deterministic services (git history, GitHub's GraphQL API, containerized JVM builds, SootUp call graphs, JaCoCo coverage, Neo4j) do everything that has one right answer. Six reasoning subagents, each owning exactly one distinct question, do the judgment calls. Between them sits an MCP boundary that validates every call in both directions and mints a content-hashed evidence ID for every payload, plus a recording tool that mechanically rejects any agent claim citing evidence the ledger never issued.",
          "The result: an agent can't assert something it didn't retrieve, not because it was told not to, but because the write path won't accept it.",
        ],
      },
      {
        heading: "The central mechanism: observed vs hypothesized paths",
        paragraphs: [
          "A static call graph over-approximates: it includes every call that's possible, including branches no execution ever takes. Causeway intersects the static call graph with the actual set of executed methods from a real run, and the path lives only in that intersection. Three separate conditions are checked, not conflated: reachability (the input reaches the faulty code), infection (that execution produces wrong internal state), and propagation (the wrong state reaches an observable output).",
          "The oracle for whether an input triggers the bug is differential: both the parent and fixed revisions are compiled and run against the same input inside a network-denied container, and their outputs are diffed. Behavioral difference across the fix boundary is the oracle, with no human-authored ground truth required.",
        ],
      },
      {
        heading: "A 14-stage pipeline, one command",
        paragraphs: [
          "The /mine-repo command sequences ingestion, a proven build recipe, three parallel recall nets (lexical, structural, and a mandatory random control net used to estimate what the other two missed), forge metadata batching, bug-fix adjudication, fault-coordinate extraction via SZZ, a compile-only build gate on both revisions, coverage and call-graph construction, importance ranking, symptom characterization, a five-rung reproducer ladder tried cheapest first (a regression test the fix itself added is free, a from-scratch agent-written harness is the expensive last resort), path tracing, and a final report that states not just what was found but what the run could and couldn't support.",
          "Every step checkpoints, so an interrupted run resumes rather than restarts. Agent dispatch happens in bounded waves of at most 4 to 5 concurrent, rather than unbounded fan-out.",
        ],
      },
      {
        heading: "A type system that prevents a real bug class",
        paragraphs: [
          "The domain model replaces Option[A] with Signal[A], either Known(value) or Unknown(reason), because Option invites getOrElse(0.0), which silently turns 'the build failed, there's no coverage number' into 'coverage was zero'. Those are different facts and the type system keeps them from merging.",
          "Fault line ranges are split into OldLines and NewLines as distinct types, because querying the wrong revision's line numbers for a multi-line diff returns a plausible-looking answer that's simply wrong, with nothing at runtime to catch it. Making the two sides different types turns that mistake into a compile error.",
        ],
      },
    ],
  },

  {
    slug: "navigators-uic",
    name: "Navigators at UIC",
    date: "2026-09-09",
    period: "Sep 2026",
    category: "Full-Stack Web",
    tagline:
      "The production community site for a student org at UIC: events, Bible studies, a game-night leaderboard, and a hidden admin mode secured entirely by Supabase Row Level Security, not client-side code.",
    role: "Solo build",
    tags: ["React 19", "Vite", "Supabase", "Postgres", "Realtime"],
    links: {
      repo: "https://github.com/Preet0504/navigators-uic",
    },
    metrics: [
      { label: "Auth model", value: "Zero passwords in client code" },
      { label: "Realtime", value: "Refetches only the changed table" },
      { label: "Offline dev", value: "Runs fully on demo data" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "A public-facing site students browse with no login, backed by exactly one admin who maintains all content, events, studies, people, and a Cold Brew game-night scoreboard, through inline edit/delete controls unlocked with a keyboard shortcut (Ctrl+Shift+A), rather than a separate admin panel route.",
        ],
      },
      {
        heading: "How the security model works",
        list: [
          "Every table is protected by Postgres Row Level Security: public read, admin-only write. There's no password logic in the client bundle at all; the anon key is safe to ship because RLS, not application code, is the enforcement boundary.",
          "Event photos and video go to Supabase Storage, not the database, keeping the Postgres tables small and fast.",
          "Realtime subscriptions refetch only the table that actually changed rather than the whole page state.",
          "Lists paginate with a 'Load more' button and images lazy-load, so the admin can add years of event history without the public page getting heavier.",
        ],
      },
      {
        heading: "A deliberate offline-first dev workflow",
        paragraphs: [
          "The app runs with zero backend configured, falling back to built-in demo content so the UI can be built and iterated on before Supabase is wired up at all. A single SQL migration script and two environment variables then turn it live.",
        ],
      },
    ],
  },

  {
    slug: "uce",
    name: "UCE, Unified Context Engine",
    date: "2026-08-14",
    period: "Aug 2026",
    category: "AI Agents & Tooling",
    tagline:
      "A governance layer for AI coding agents: every proposed file change gets a deterministic allow/warn/block decision backed by a Neo4j evidence graph and an actual NuSMV model checker, not an LLM's guess about what a change might break.",
    role: "Solo build, published to PyPI",
    tags: ["Python", "Neo4j", "MCP", "NuSMV", "Tree-sitter", "Keycloak"],
    links: {
      repo: "https://github.com/Preet0504/uce",
      pypi: "https://pypi.org/project/uce-engine/",
    },
    metrics: [
      { label: "Languages ingested", value: "Python, TS/JS, Go, Java, C, C++" },
      { label: "Distribution", value: "pip install uce-engine" },
      { label: "Compliance layer", value: "Formal model checking, not a graph guess" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "A developer or an AI agent proposes a change: write a file, delete a file, touch a table. UCE returns a decision (allow, warn, or block), the exact evidence behind it, and, when blocked, what would need to be true for it to be allowed. The decision is backed by a knowledge graph over code, schema, and RBAC rules, plus a real model checker that proves or disproves a GDPR/PII-flow property, never a graph-connectivity guess dressed up as compliance.",
          "The core design bet: the LLM orchestrates which tool to call; it never adjudicates the actual allow/block decision. That decision path runs identically with no LLM reachable at all.",
        ],
      },
      {
        heading: "Two cooperating layers",
        list: [
          "Deterministic graph traversal (Cypher over Neo4j) for blast radius and RBAC: fast and correct by construction, though for blast radius specifically it's a proxy, showing that a file is reachable, not that it's verified correct.",
          "Formal model checking (NuSMV) for GDPR/PII-flow claims specifically: slower and narrower, but a proof, since source is compiled into a Kripke state machine and a temporal-logic property is checked against every execution path, returning a counterexample witness when it fails.",
          "A Policy node in the graph exists only as the target of a proven VIOLATES/COMPLIES edge the model checker wrote. There is no weaker, document-declared 'policy applies here' fallback to quietly rely on instead.",
        ],
      },
      {
        heading: "The mutation gate",
        paragraphs: [
          "write_file and delete_file require a gate_token, and the only place a valid one is minted is inside propose_change, only on an allow decision, scoped to the exact file set, TTL-bound, single-use. There is no code path from a bare write call to an actual mutation that hasn't first passed a successful propose_change call.",
          "Detecting a violation isn't the same as fixing it: propose_remediation writes a candidate patch to a temporary copy, re-runs the full taint/Kripke/NuSMV pipeline against it, and only mints a remediation_token when the fix is verified. write_file independently re-hashes the bytes it's about to write against that token rather than trusting the earlier decision blindly.",
        ],
      },
      {
        heading: "Honesty under uncertainty",
        paragraphs: [
          "An aggregate compliance verdict is never a bare COMPLIANT unless something was actually verified and nothing is left CONDITIONAL or NOT_EVIDENCED. A property outside the supported code subset is reported as unresolved, never silently passed, and the case-study evaluation harness explicitly scores 'honesty under uncertainty' as its own dimension, alongside blast-radius precision/recall and evidence quality.",
        ],
      },
      {
        heading: "Deployment",
        paragraphs: [
          "Self-hosted and local-first by default: deterministic ingestion, graph construction, RBAC evaluation, and the NuSMV check never make a network call outside your own Neo4j/verifier instances. The only opt-in remote step, LLM-assisted document extraction and ACTL drafting, can be pointed at a local Ollama model to keep everything on-machine.",
        ],
      },
    ],
  },

  {
    slug: "overmind",
    name: "Overmind",
    date: "2026-08-09",
    period: "Aug 2026",
    category: "AI Agents & Tooling",
    tagline:
      "A multiplayer terminal coding REPL: several developers share a WebSocket session, queue prompts against one repo, and an AI agent executes approved changes while streaming progress to every connected terminal.",
    role: "Team build (2 engineers)",
    tags: ["TypeScript", "Ink/React TUI", "WebSocket", "Gemini 2.0", "FastAPI", "Terraform"],
    links: {
      repo: "https://github.com/atharva789/Overmind",
    },
    metrics: [
      { label: "Session size", value: "Up to 8 members" },
      { label: "Protocol", value: "Zod-validated, 20+ message types" },
      { label: "Scope constraint", value: "Max 15 files per prompt" },
    ],
    sections: [
      {
        heading: "What's real vs in progress, stated in the README, not just here",
        paragraphs: [
          "The project's own status table is unusually direct about what's shipped versus scaffolded, which is worth reproducing rather than smoothing over.",
        ],
        list: [
          "Implemented: WebSocket session management (Zod-validated protocol, up to 8 members), the full Ink/React terminal UI (prompt input, execution view, review panel, activity feed), local AI execution via Gemini 2.0 Flash with a tool-calling loop, scope extraction that constrains any prompt to 15 files max, and a host-approval flow with a safety check before execution begins.",
          "Code exists but unverified end-to-end in production: a remote FastAPI orchestrator with a planner plus parallel subagents deployed to ECS Fargate, AI-driven 3-way merge resolution with confidence scoring and automatic PR creation, and a pgvector-backed story agent that clusters prompts into features by embedding similarity.",
          "CI is path-filtered to the Python orchestrator only and doesn't run tests; TypeScript changes currently get no CI at all, a known gap, not an oversight papered over.",
        ],
      },
      {
        heading: "How a session actually runs",
        paragraphs: [
          "Prompts from every connected terminal land in a FIFO queue for deterministic ordering, get scope-extracted against the live file tree by Gemini, pass a greenlight safety check, then wait on host approval. From there they either execute locally (Gemini 2.0 Flash with read_file/write_file/list_dir tools) or get dispatched to the remote ECS orchestrator, where a planner fans work out to parallel subagents and an evaluation agent checks the result before file sync and merge resolution.",
        ],
      },
    ],
  },

  {
    slug: "grail-dx",
    name: "GRAIL-DX, MS Thesis at UIC",
    date: "2026-06-15",
    period: "2026, ongoing",
    category: "Research",
    tagline:
      "My MS thesis at UIC, advised by Dr. Mark Grechanik: a framework that augments large language models with static analysis, dynamic traces, fault injection, and graph reasoning so an agent can localize software faults from evidence instead of guessing from memory.",
    role: "MS thesis, advised by Dr. Mark Grechanik",
    tags: ["Scala 3", "GraphRAG", "Neo4j", "MCP", "Symbolic execution", "LLVM/JVM analysis"],
    links: {
      repo: "https://github.com/0x1DOCD00D/GRAIL-DX",
    },
    metrics: [
      { label: "Status", value: "Active MS thesis, design into implementation" },
      { label: "Targets", value: "Java, Scala, and LLVM-based applications" },
      { label: "Core idea", value: "LLM orchestrates, tools supply the facts" },
    ],
    sections: [
      {
        heading: "What GRAIL-DX is",
        paragraphs: [
          "GRAIL, Graph Reasoning And Abductive Inference with LLMs for Differential Diagnosis, is a subproject of a broader UIC research program on how large language models can be augmented with application-specific evidence, through retrieval-augmented generation, graph reasoning, and differential diagnosis, to pinpoint faults in complex systems. GRAIL-DX is my thesis within that program: given a stakeholder's description of a symptom, plus input values, configuration, and deployment context, the system should return likely source code or configuration locations, explain how the suspected fault could propagate to the observed failure, and propose repairs or targeted diagnostic experiments.",
          "This is an active thesis, not a finished product. The design treats fault localization as grounded abductive reasoning: start from a symptom and work backward through source structure, runtime traces, configuration dependencies, and feasible propagation paths, with the LLM synthesizing evidence sources into a diagnosis rather than serving as the source of truth for any of them.",
        ],
      },
      {
        heading: "The architectural principle carried over from my other agentic work",
        paragraphs: [
          "Static analyzers build the map of the application. Dynamic analyzers record how execution moves through that map. Fault injection creates counterfactual evidence by comparing an original run against a deliberately mutated one. A Neo4j evidence graph stores the memory of source structure, runtime behavior, and prior failures. A symbolic checker (Z3) rejects explanations that aren't actually feasible given the code. The LLM performs the abductive diagnosis itself, through a ReAct loop that asks tools for evidence rather than inferring facts about control flow or data flow from reading code alone.",
        ],
      },
      {
        heading: "Design decisions specific to this thesis",
        list: [
          "A home-grown Java instrumentation project, JADIDA, is a first-class evidence source: where generic telemetry tools show that a statement executed, JADIDA is built to show how a value actually propagated through assignments, method calls, and field writes, which is often the more diagnostic fact.",
          "Mutation-based fault injection is deliberately selective rather than exhaustive: candidate locations are ranked by how much diagnostic leverage an injected fault at that location would provide, since mutating every instruction produces combinatorial explosion and redundant evidence.",
          "The Model Context Protocol is the standard way ReAct subagents reach every analyzer, the graph store, the symbolic checker, and the experiment runner, so new evidence sources can be added as MCP servers without rewriting the core diagnosis loop.",
          "The plan for evaluation is explicitly adversarial to the thesis's own claim: GRAIL-DX is benchmarked against direct LLM debugging and against a code-only GraphRAG baseline, and the honest expectation, stated in the design itself, is that a direct model call wins some cases outright. The claim is narrower: better localization and fewer wrong fixes specifically where application-specific static and dynamic evidence matters.",
        ],
      },
      {
        heading: "Where this stands",
        paragraphs: [
          "The thesis is currently moving from a complete architectural specification (the domain model, the MCP tool catalog, the eighteen-stage pipeline from application onboarding through repair validation) into implementation. I'm keeping this page honest rather than backdating results that don't exist yet: there is no benchmark table here because none has been run to completion. When there is one, it will read like the rest of this site, with real numbers and stated limitations.",
        ],
      },
    ],
  },

  {
    slug: "talkai",
    name: "TalkAI",
    date: "2026-03-14",
    period: "Mar 2026",
    category: "Full-Stack Web",
    tagline:
      "A platform for building custom AI agents that hold HD video calls with natural voice, every session auto-summarized with key insights and follow-ups, with a provider-abstracted pipeline for agent voice and face media.",
    role: "Solo build",
    tags: ["Next.js", "Stream Video", "OpenAI Realtime", "Inngest", "Drizzle", "Neon"],
    links: {
      repo: "https://github.com/Preet0504/talkai",
      live: "https://talkai-ruby.vercel.app/",
    },
    metrics: [
      { label: "Modules", value: "Agents, Meetings, Media, Premium, Dashboard" },
      { label: "Async processing", value: "Inngest job pipeline" },
      { label: "Setup", value: "Minutes, not hours" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Agents tailored for support, sales, or technical consulting hold real HD video calls with natural voice interaction over Stream's video infrastructure and OpenAI's realtime API. Every session gets real-time transcription and an automatic post-call summary with key insights and follow-up actions, with no manual note-taking.",
        ],
      },
      {
        heading: "Agent identity media pipeline",
        paragraphs: [
          "Agents carry a voiceProfile and a faceProfile (provider IDs, URLs, processing status, quality scores). Uploads go through an authenticated, short-lived-token upload session, are stored outside the public web root, and are processed asynchronously by an Inngest job that assigns quality scores and moves status through pending, processing, and ready, with explicit failure states rather than a silent hang.",
          "The provider layer is deliberately abstracted, with voice-engine and avatar-engine interfaces under src/modules/agents/engines/, so a real TTS/lip-sync provider can be dropped in without touching the call UI, which currently falls back to a static speaking-indicator tile. That fallback is documented and intentional, not a bug.",
        ],
      },
    ],
  },

  {
    slug: "aca-d-ashboard",
    name: "Aca-d-ashboard (UniCourse)",
    date: "2026-02-12",
    period: "Feb 2026",
    category: "Full-Stack Web",
    tagline:
      "A production-shaped Learning Management System: role-based access for students, teachers, and admins, schedule-conflict detection, waitlists, and Postgres Row-Level Security enforcing every boundary.",
    role: "Solo build",
    tags: ["React 18", "TypeScript", "Supabase", "Postgres RLS", "React Query"],
    links: {
      repo: "https://github.com/Preet0504/spark-creative",
      live: "https://acadashboard.vercel.app/",
    },
    metrics: [
      { label: "Roles", value: "Student, Teacher, Admin" },
      { label: "Security", value: "RLS on every table" },
      { label: "Enrollment logic", value: "Conflict + prerequisite checks" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Course catalog with search and filter, section-level enrollment with real-time seat availability and waitlisting, a weekly schedule view, assignment submission with file uploads, GPA-tracked grades, and an admin surface for course/section/school/user management and system-wide announcements.",
        ],
      },
      {
        heading: "Security model",
        paragraphs: [
          "Roles live in a separate user_roles table specifically to prevent privilege-escalation attacks, checked through SECURITY DEFINER Postgres functions (has_role, is_instructor_for_section, can_view_profile) so role checks don't recurse through RLS policies themselves. Every table, enrollments, grades, submissions, is RLS-protected so students only ever see their own records and teachers only their assigned sections, enforced at the database layer rather than trusted to the client.",
        ],
      },
      {
        heading: "Enrollment logic that's actually enforced",
        paragraphs: [
          "Schedule-conflict detection and prerequisite checks run before a student can enroll in a section, backed by a real relational schema (schools to courses to sections to enrollments/assignments) rather than a flat table pretending to be one.",
        ],
      },
    ],
  },

  {
    slug: "youtube-trending-analysis",
    name: "YouTube Trending Videos Analysis",
    date: "2026-03-03",
    period: "Mar 2026",
    category: "Data & ML",
    tagline:
      "A reproducible R pipeline over 178,000+ trending-video rows across 11 countries: schema validation, feature engineering, and a generated insights report, not a one-off notebook.",
    role: "Solo build",
    tags: ["R", "data.table", "ggplot2", "Reproducible pipelines"],
    links: {
      repo: "https://github.com/Preet0504/youtube-trending-2026-analysis",
    },
    metrics: [
      { label: "Rows analyzed", value: "178,000+" },
      { label: "Countries", value: "11 (BR, CA, DE, FR, GB, IN, JP, KR, MX, RU, US)" },
      { label: "Output", value: "Auto-generated Markdown insights report" },
    ],
    sections: [
      {
        heading: "What the pipeline does end to end",
        list: [
          "Auto-discovers and ingests every per-country CSV, validates the schema against expected columns, and fails fast rather than silently proceeding on missing fields.",
          "Engineers features that don't exist in the raw data: engagement_rate, dislike_rate, time_to_trend_days, trend_span_days, and time-bucketed trending periods.",
          "Runs real data-quality checks, flagging duplicate snapshots and removing them, warning when likes exceed views, and logging every check to a validation report rather than just cleaning silently.",
          "Auto-adapts its own visualizations to the data it's given, switching to bar charts instead of a misleading time series when the data is a single-day snapshot, capping engagement outliers at the 99th percentile, and log-scaling heavy-tailed time-to-trend distributions.",
          "Generates a Markdown insights report with each figure embedded and 2 to 3 concrete written observations per chart, so the deliverable is a narrative, not just a folder of PNGs.",
        ],
      },
    ],
  },

  {
    slug: "distributed-rag-hadoop",
    name: "Distributed RAG Pipeline, Apache Hadoop",
    date: "2025-11-01",
    period: "Fall 2025, Part 1 of 3",
    category: "Distributed Systems",
    tagline:
      "A MapReduce pipeline on AWS EMR that turns a corpus of academic PDFs into a distributed HNSW vector index, the first of a three-part distributed-RAG series moving from Hadoop to Spark to Flink/Neo4j.",
    role: "Solo build, CS441, UIC",
    tags: ["Scala", "Hadoop MapReduce", "AWS EMR", "Apache Lucene HNSW", "Ollama"],
    links: {
      repo: "https://github.com/Preet0504/Distributed-RAG-Pipeline-on-AWS-EMR-using-Apache-Hadoop",
    },
    metrics: [
      { label: "Pipeline", value: "PDFBox, chunker, MapReduce, HNSW" },
      { label: "Cluster", value: "AWS EMR, m5.2xlarge x3" },
      { label: "Embeddings", value: "Ollama mxbai-embed-large" },
    ],
    sections: [
      {
        heading: "Pipeline",
        paragraphs: [
          "Academic PDFs from the MSR corpus are text-extracted with Apache PDFBox, split with a sliding-window chunker with overlap, embedded via Ollama's mxbai-embed-large, then distributed across a Hadoop MapReduce job on a 3-node AWS EMR cluster (EMR 6.15, Java 11). Reducers write partitioned shards of a Lucene HNSW vector index to S3 for distributed similarity search.",
          "Part 1 of a series: the same corpus and embedding model carry through Part 2 (Spark on EMR, Delta Lake) and Part 3 (Flink plus Neo4j GraphRAG), each README explicitly cross-referencing the others.",
        ],
      },
    ],
  },

  {
    slug: "distributed-embedding-spark",
    name: "Distributed Document Embedding, Apache Spark",
    date: "2025-11-18",
    period: "Fall 2025, Part 2 of 3",
    category: "Distributed Systems",
    tagline:
      "Turns a standalone embedding script into a horizontally scalable Spark application on AWS EMR/YARN, writing versioned, ACID-compliant output to a Delta Lake table on S3.",
    role: "Solo build, CS441, UIC",
    tags: ["Scala", "Apache Spark", "Delta Lake", "AWS EMR/YARN", "STTP", "Circe"],
    links: {
      repo: "https://github.com/Preet0504/Distributed-Document-Embedding-Pipeline-on-AWS-EMR-using-Apache-Spark",
    },
    metrics: [
      { label: "Cluster mode", value: "YARN, 2 executors x 4 vCores" },
      { label: "Throughput", value: "~300 chunks across 11 PDFs, ~15 min" },
      { label: "Storage", value: "Delta Lake on S3 (ACID, versioned)" },
    ],
    sections: [
      {
        heading: "What changed from Part 1",
        paragraphs: [
          "Where the Hadoop version ran locally orchestrated MapReduce, this is true horizontal scaling: Spark executors on YARN pull PDFs from S3, extract and chunk text at roughly 400 tokens per chunk, and fire concurrent async calls to an Ollama embedding server running on a separate EC2 instance in the same VPC. Output lands as a versioned Delta Lake table rather than flat files, so downstream analytics get schema evolution and fault tolerance for free.",
        ],
      },
      {
        heading: "Real dependency hell, resolved and documented",
        paragraphs: [
          "Shipping this meant working through Circe/Cats version conflicts (namespace-shaded and pinned explicitly), an S3A timeout string that needed to be an integer instead of the string '60s', and duplicate-Spark-library LinkageErrors from not marking Spark and Scala as 'provided', each documented with cause and fix rather than just quietly patched.",
        ],
      },
    ],
  },

  {
    slug: "graphrag-flink",
    name: "GraphRAG, Apache Flink, Neo4j & LLMs",
    date: "2025-12-12",
    period: "Fall 2025, Part 3 of 3",
    category: "Distributed Systems",
    tagline:
      "A streaming knowledge-graph builder that fuses rule-based NLP, LLM scoring, and co-occurrence statistics into one weighted relation per concept pair, queryable through a REST API built for reasoning, not just lookup.",
    role: "Solo build, CS441, UIC",
    tags: ["Scala", "Apache Flink", "Neo4j", "Ollama", "REST API"],
    links: {
      repo: "https://github.com/Preet0504/GraphRAG-A-Distributed-Knowledge-Graph-Pipeline-Using-Apache-Flink-Neo4j-LLMs",
    },
    metrics: [
      { label: "Stages", value: "6-stage streaming pipeline" },
      { label: "Signal fusion", value: "Rules + LLM + co-occurrence" },
      { label: "API surface", value: "query, explore, explain, evidence" },
    ],
    sections: [
      {
        heading: "Why three independent signals, fused",
        paragraphs: [
          "Concepts are extracted two ways: deterministic heuristic parsing (tokenization, lemmatization, POS filtering, which is high precision and transparent but low recall) and an Ollama LLM pass (which recovers implicit relations a heuristic misses, but can hallucinate). Every candidate concept pair is then scored three independent ways: rule-based linguistic patterns such as 'X causes Y', LLM confidence with textual evidence, and co-occurrence frequency across chunks, documents, and the corpus. These are fused into a single weighted FusedRelation edge, prioritizing deterministic rule hits, then high-confidence LLM edges, then co-occurrence purely as grounding.",
        ],
      },
      {
        heading: "Why Neo4j, and what the API actually answers",
        paragraphs: [
          "The fused graph, Document, Chunk, and Concept nodes connected by HAS_CHUNK, MENTIONS, CO_OCCUR, and typed predicate edges, is projected into Neo4j specifically for multi-hop path queries. The REST API exposes four distinct operations rather than one generic search: /query for nodes and relations tied to a concept, /explore to expand a concept's neighbors, /explain for a reasoning path between two concepts, and /evidence for the chunk-level text that supports a given edge. That makes the graph function as a reasoning surface, not just an index.",
        ],
      },
    ],
  },

  {
    slug: "go-emotions",
    name: "Go Emotions",
    date: "2025-06-01",
    period: "2025",
    category: "Data & ML",
    tagline:
      "A Flask-served multi-label emotion classifier: frozen GloVe embeddings feeding a Bidirectional LSTM, with Focal Loss specifically chosen to handle severe class imbalance across emotion labels.",
    role: "Team build",
    tags: ["Python", "TensorFlow/Keras", "Flask", "GloVe", "Focal Loss"],
    links: {
      repo: "https://github.com/Rishi7337/GO_EMOTIONS",
    },
    metrics: [
      { label: "Task", value: "Multi-label emotion classification" },
      { label: "Embeddings", value: "Frozen GloVe" },
      { label: "Loss", value: "Focal Loss (class imbalance)" },
    ],
    sections: [
      {
        heading: "Why Focal Loss",
        paragraphs: [
          "Standard cross-entropy over-weights common emotion labels in an imbalanced multi-label setting; Focal Loss down-weights easy, well-classified examples so the model keeps learning signal from rare emotion classes instead of collapsing to majority-label predictions. Sigmoid outputs, rather than softmax, let each example carry multiple simultaneous emotion labels, matching how real text is actually annotated.",
        ],
      },
    ],
  },

  {
    slug: "campus-art",
    name: "Campus ARt",
    date: "2025-04-01",
    period: "2024 to 2025",
    category: "Full-Stack Web",
    tagline:
      "An interactive campus map where students physically visit locations to unlock AR art hotspots, leave notes or sketches on a shared canvas, and see what others left at the same spot.",
    role: "Solo build",
    tags: ["React", "Next.js", "WebXR", "MindAR", "WebSockets", "TypeScript"],
    links: {
      live: "https://campus-art.vercel.app/",
    },
    metrics: [
      { label: "Presence", value: "Location-gated AR hotspots" },
      { label: "Collaboration", value: "Shared canvas per location" },
      { label: "Real-time", value: "WebSocket-synced contributions" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Students unlock virtual art hotspots by physically visiting campus locations, then enter an AR space anchored to that spot to leave a note or sketch on a shared canvas, and see every prior visitor's contribution layered at the same location. It turns a static campus map into a location-gated collaborative art wall.",
        ],
      },
    ],
  },

  {
    slug: "harry-potter-quidditch",
    name: "Harry Potter Quidditch Champions",
    date: "2025-02-01",
    period: "2024 to 2025",
    category: "Full-Stack Web",
    tagline:
      "A themed Quidditch tournament platform: team registration, ticketed match bookings with Stripe, an admin scheduling portal, and automated confirmation emails.",
    role: "Solo build",
    tags: ["Python", "Flask", "MongoDB", "Stripe", "Gunicorn"],
    links: {
      live: "https://hpquidditch.onrender.com/",
    },
    metrics: [
      { label: "Payments", value: "Stripe checkout" },
      { label: "Admin", value: "Scheduling portal" },
      { label: "Notifications", value: "Automated email confirmations" },
    ],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Teams register for a tournament bracket, fans book match tickets through Stripe with real-time confirmation, an admin portal handles scheduling across the bracket, and every booking triggers an automated confirmation email. It's a complete small-scale event-ticketing platform rather than a static bracket page.",
        ],
      },
    ],
  },

  {
    slug: "battle-painters",
    name: "Battle Painters",
    date: "2024-09-01",
    period: "2024",
    category: "Computer Vision",
    tagline:
      "A real-time multiplayer painting game controlled entirely by hand gestures: each player's hand gets a tracked color, and whoever covers the most pixels in a defined region wins.",
    role: "Solo build",
    tags: ["Python", "MediaPipe", "Computer Vision"],
    links: {
      repo: "https://github.com/Preet0504/battle_painters",
    },
    metrics: [{ label: "Input", value: "Webcam hand tracking" }, { label: "Players", value: "Multiplayer, shared canvas" }],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "MediaPipe hand-landmark tracking assigns each detected hand a unique paint color on a shared canvas in real time, and a defined scoring region tallies pixel coverage per color to determine the winner. No controllers, just webcam gesture tracking.",
        ],
      },
    ],
  },

  {
    slug: "ping-pong",
    name: "Ping Pong",
    date: "2024-06-01",
    period: "2024",
    category: "Computer Vision",
    tagline:
      "A gesture-controlled Pong where each player's hand, tracked live through a webcam, is the paddle.",
    role: "Solo build",
    tags: ["Python", "OpenCV", "cvzone"],
    links: {
      repo: "https://github.com/Preet0504/Ping_Pong",
    },
    metrics: [{ label: "Input", value: "Live webcam hand tracking" }, { label: "Physics", value: "Real-time collision detection" }],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "OpenCV and cvzone track hand position frame by frame and map it directly to paddle position, with real-time collision detection against the ball. It's a small, complete demonstration of interactive CV rather than a pre-recorded gesture demo.",
        ],
      },
    ],
  },
];

export const openSourceContribution = {
  name: "Zulip",
  role: "Open-source contribution (fork)",
  date: "2026-09-19",
  period: "Sep 2026",
  tagline:
    "Two shipped features on Zulip's chat platform: an async, map-reduced unread-message recap and a real-time topic-drift detector, both built to survive real production constraints, with no LLM work on the request thread, ever.",
  repo: "https://github.com/Preet0504/zulip",
  highlights: [
    "Message Recap: POST /json/messages/recap enqueues onto a new RabbitMQ queue and returns immediately. A background worker groups unread messages into per-conversation buckets and map-reduces a summary over them with a bounded concurrent-call pool of 5 (to respect provider rate limits), merges them into one recap, and pushes the result back over the user's existing Tornado long-poll connection. Per-conversation summaries are cached in memcached so reopening the page doesn't re-pay for the same LLM call.",
    "Topic Drift: detects when a conversation has wandered from its topic title and suggests a rename, checking only every 5th message, not every message, with a memcached atomic claim so a burst of simultaneous replies still triggers exactly one LLM call, not one per message.",
    "Fixed a real production bug along the way: the drift banner wasn't clearing on in-app topic switches because the code hooked the hash-change handler, which Zulip's own router skips for internally-triggered navigation. Moved the hook to message_lists.update_current_message_list(), the one point guaranteed to fire for every narrow change.",
    "Both features reuse Zulip's existing per-user monthly AI-cost budget and permission model instead of introducing a parallel one.",
  ],
};

export default projects;
