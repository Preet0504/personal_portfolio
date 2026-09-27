const experience = [
  {
    title: "Data Analyst",
    company: "University of Illinois Chicago, College of Medicine",
    date: "Apr 2026 - Present",
    icon: "/uic.png",
    points: [
      "Automated a Qualtrics-to-Tableau reporting pipeline in Python, consolidating 21 fragmented Google Sheets dashboards into a single centralized system, increasing data throughput 200% and eliminating the bulk of manual reporting work.",
      "Designed and automated 15+ data processing pipelines for ingestion, transformation, and reporting, cutting processing time 80%.",
      "Led quality assurance across existing Google Sheets and Excel implementations, auditing formulas and data structures to resolve inconsistencies, cutting the error rate 40% and strengthening data integrity across reporting workflows.",
      "Currently fine-tuning a local LLM for a domain-specific educational data use case, targeting a 60% productivity boost for the team on deployment.",
    ],
  },
  {
    title: "Product Development Intern",
    company: "Feyntech AI",
    date: "May 2025 - Aug 2025",
    icon: "/youredugator.png",
    points: [
      "Designed and built an AI-powered IELTS Speaking evaluation module using the Azure Speech SDK, ElevenLabs, and OpenAI APIs, improving end-to-end speech evaluation throughput 3x.",
      "Built synthetic data generation workflows for the IELTS Writing, Reading, and Listening modules using DALL-E and structured JSON schemas, expanding production question coverage 120%.",
      "Developed an ML-based scoring engine paired with a GenAI feedback system to evaluate student performance across IELTS modules, reaching 80% accuracy predicting band scores.",
      "Worked directly with the CEO and a cross-functional team to scope, design, and present product features to clients, translating evaluation criteria into usable product requirements.",
      "Owned feature delivery end to end, from defining the data schema to shipping into production, balancing model accuracy against latency and cost.",
    ],
  },
  {
    title: "Teaching Assistant, Computer Networks",
    company: "Ahmedabad University",
    date: "Jan 2025 - Mar 2025",
    icon: "/ahmedabad.png",
    points: [
      "Ran C tutorials on file management in lab sessions for a class of 130 students.",
    ],
  },
  {
    title: "Teaching Assistant / Peer Tutor",
    company: "Ahmedabad University",
    date: "Aug 2024 - Nov 2024",
    icon: "/ahmedabad.png",
    points: [
      "Artificial Intelligence: assisted a class of 40 across BTech, BSc, MTech, and PhD levels.",
      "Embedded System Designs: managed and evaluated projects for a class of 130.",
      "Predictive Analytics for Business: peer-tutored a class of 60 BBA and BTech students.",
    ],
  },
  {
    title: "Research Intern",
    company: "TechSture Technologies India Pvt. Ltd.",
    date: "May 2024 - Aug 2024",
    icon: "/techsture.png",
    points: [
      "Designed and built a two-part Intelligent Transportation System testbed at Ahmedabad University for pedestrian safety: a roadside unit that detects hazards and a vehicle-side unit that alerts the driver and watches for driver drowsiness.",
      "Roadside detection: a YDLidar depth camera feeding a Raspberry Pi 8GB (the local processing unit), running a YOLOv4-tiny pedestrian detector constrained to a defined region of interest, with confidence thresholding and non-maximum suppression to remove duplicate boxes; an alert fires when more than one pedestrian is detected in the hazard zone.",
      "Built the full alert pipeline end to end: a Watchdog-based file monitor picks up each detection event, extracts GPS coordinates, writes structured JSON plus a timestamped text record, sends an SMS through a GSM modem driven by AT commands, and pushes the same JSON to the on-board unit over UDP via an ACME listener and netcat, all shell-scripted for unattended operation.",
      "Architected the roadside-to-vehicle communication path over TCP and DNS to keep alert delivery reliable, reaching drivers in under 10ms via multi-threaded networking with no data loss.",
      "Vehicle-side drowsiness detection: Dlib facial landmark detection locates the driver's eyes, and a pre-trained Keras CNN classifies eye state frame by frame on a Raspberry Pi-powered in-vehicle device; an audible alarm triggers once the eyes stay closed past a 3-second threshold.",
      "Built a live vehicle-tracking dashboard with JavaFX and OpenStreetMap and exposed RESTful APIs serving real-time vehicle telemetry and safety alerts.",
      "Validated the C-V2X link between the MK6 roadside unit and on-board unit (Cohda Wireless hardware, LTE-based radio) by capturing and analyzing IEEE 1609 packets in Wireshark, confirming correct message structure and timing end to end.",
      "Wrote up the full system design, data flow, and results as a formal research report (ENR370) for course credit at Ahmedabad University.",
    ],
  },
  {
    title: "Research Scholar",
    company: "Machine Intelligence, Computing, and xG Networks Lab (MICxN)",
    date: "Jan 2024 - May 2025",
    icon: "/micxn.png",
    points: [
      "Co-authored \"Capacity Analysis of Vehicular Networks in a Multi-User Mixed Traffic Scenario,\" published at IEEE NCC 2025.",
      "Reproduced 15+ research papers over the role, building the foundational understanding across vehicular networks and applied ML that directly informed the published work.",
      "Reviewed and organized 50+ manuscripts and research papers, maintaining structured summaries used by faculty for ongoing research decisions.",
      "Mentored 20+ junior research scholars, managing communication, reviewing documentation, and tracking progress across their projects.",
      "Led and coordinated 5+ technical workshops across multiple universities, owning logistics end to end from materials to venue to scheduling.",
    ],
  },
];

export default experience;
