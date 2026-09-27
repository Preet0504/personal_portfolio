const experience = [
  {
    title: "Data Analyst",
    company: "UIC, College of Medicine",
    date: "Mar 2026 - Present",
    icon: "/uic.png",
    points: [
      "Analyze student evaluation data across three UIC College of Medicine campuses (Chicago, Peoria, Rockford) to surface patterns that drive academic decisions.",
      "Translate findings into recommendations that directly shape teaching methodology and curriculum design.",
      "Streamlined reporting workflows for faculty and the education department, cutting manual reporting effort.",
      "Identify gaps in evaluation practice and propose data-backed improvements to the student learning experience.",
    ],
  },
  {
    title: "Product Development Intern",
    company: "yourEDUGATOR",
    date: "May 2025 - Aug 2025",
    icon: "/youredugator.png",
    points: [
      "Built an AI-powered IELTS Speaking module with the CEO, using the Azure Speech SDK, ElevenLabs STT, and OpenAI tts-1, lifting speaking-practice throughput 3x.",
      "Built ETL pipelines over JSON-schema datasets for Reading, Listening, and Writing, and used the OpenAI API plus DALL-E 3 to auto-generate Writing Task-1 diagrams, growing question-bank coverage 120%.",
      "Built a RAG-based internal assistant (LangChain and OpenAI) indexing 200+ design docs, cutting internal knowledge-lookup time 50%.",
      "Built the investor pitch deck and used Power BI and Tableau to visualize company performance for strategic decisions.",
    ],
  },
  {
    title: "Research Intern",
    company: "Techsture Technologies",
    date: "May 2024 - Aug 2024",
    icon: "/techsture.png",
    points: [
      "Designed and built a two-part Intelligent Transportation System testbed at Ahmedabad University for pedestrian safety: a roadside unit that detects hazards and a vehicle-side unit that alerts the driver and watches for driver drowsiness.",
      "Roadside detection: a YDLidar depth camera feeding a Raspberry Pi 8GB (the local processing unit), running a YOLOv4-tiny pedestrian detector constrained to a defined region of interest, with confidence thresholding and non-maximum suppression to remove duplicate boxes; an alert fires when more than one pedestrian is detected in the hazard zone.",
      "Built the full alert pipeline end to end: a Watchdog-based file monitor picks up each detection event, extracts GPS coordinates, writes structured JSON plus a timestamped text record, sends an SMS through a GSM modem driven by AT commands, and pushes the same JSON to the on-board unit over UDP via an ACME listener and netcat, all shell-scripted for unattended operation.",
      "Vehicle-side drowsiness detection: Dlib facial landmark detection locates the driver's eyes, and a pre-trained Keras CNN classifies eye state frame by frame; an audible alarm triggers once the eyes stay closed past a 3-second threshold.",
      "Validated the C-V2X link between the MK6 roadside unit and on-board unit (Cohda Wireless hardware, LTE-based radio) by capturing and analyzing IEEE 1609 packets in Wireshark, confirming correct message structure and timing end to end.",
      "Wrote up the full system design, data flow, and results as a formal research report (ENR370) for course credit at Ahmedabad University, achieving under 10ms alert latency across 10+ validated scenarios with multi-threaded UDP and SNMP monitoring.",
    ],
  },
  {
    title: "Research Scholar",
    company: "MICxN Lab",
    date: "Jan 2024 - Apr 2025",
    icon: "/micxn.png",
    points: [
      "Reviewed research papers and summarized findings in support of faculty and peer projects.",
      "Ran 5+ technical workshops at other universities on advanced topics.",
      "Mentored 20+ junior research scholars on research methodology and problem-solving.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Ahmedabad University",
    date: "Aug 2024 - Mar 2025",
    icon: "/ahmedabad.png",
    points: [
      "Artificial Intelligence: assisted a class of 40 across BTech, BSc, MTech, and PhD levels.",
      "Embedded System Designs: managed and evaluated projects for a class of 130.",
      "Predictive Analytics for Business: supported a class of 60 BBA and BTech students.",
      "Computer Networks: managed a class of 130, running C tutorials on file management.",
    ],
  },
];

export default experience;
