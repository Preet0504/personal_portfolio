export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "volunteering",
    title: "Volunteering",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Development",
  },
  {
    title: "Cloud Computing",
  },
  {
    title: "Data Science & AI",
  },
  {
    title: "Product Development",
  },
];

const technologies = {
  "Languages": [
    { name: "Python",
      icon: "/python-original.svg"
    },
    { name: "TypeScript",
      icon: "/typescript-original.svg"
    },
    { name: "Java",
      icon: "/java-original.svg"
    },
    { name: "Go",
      icon: "/go-original.svg"
    },
    { name: "C/C++",
      icon: "/5145df1033fa60f13b3b7125d2b69554.jpg"
    },
    { name: "Scala",
      icon: "/scala-original.svg"
    },
    { name: "SQL",
      icon: "/mysql-original.svg"
    },
  ],
  "Frameworks & Libraries": [
    { name: "React.js",
      icon: "/react-original.svg"
    },
    { name: "Node.js",
      icon: "/nodejs-original.svg"
    },
    { name: "Next.js",
      icon: "/nextjs-original.svg"
    },
    { name: "Flask",
      icon: "/flask-original.svg"
    },
    { name: "Django",
      icon: "/django-plain.svg"
    },
    { name: "FastAPI",
      icon: "/fastapi-original.svg"
    },
    { name: "TensorFlow",
      icon: "/tensorflow-original.svg"
    },
    { name: "PyTorch",
      icon: "/pytorch-original.svg"
    },
  ],
  "Cloud & DevOps": [
    { name: "AWS",
      icon: "/Aws-Logo-PNG-Image.png"
    },
    { name: "Docker",
      icon: "/docker-original.svg"
    },
    { name: "Kubernetes",
      icon: "/kubernetes-plain.svg"
    },
    { name: "Git",
      icon: "/git-original.svg"
    },
    { name: "Vercel",
      icon: "/vercel-original.svg"
    },
    { name: "CloudFlare",
      icon: "/cloudflare-original.svg"
    }
  ],
  "Data & Analytics": [
    { name: "Hadoop",
      icon: "/hadoop-original.svg"
    },
    { name: "Lucene",
      icon: "/lucene.svg"
    },
    { name: "Spark",
      icon: "/Apache_Spark_logo.svg.png"
    },
    { name: "Flink",
      icon: "/Apache-Flink-1024x640.jpg"
    },
    {
      name: "Neo4j",
      icon: "/neo4j-original.svg"
    },
    { name: "Kafka",
      icon: "/apachekafka-original.svg"
    },
    { name: "PowerBI",
      icon: "/906342.png"
    },
    { name: "Tableau",
      icon: "/Tableau-Symbol.png"
    },
    { name: "MongoDB",
      icon: "/mongodb-original.svg"
    },
    { name: "Oracle",
      icon: "/oracle-original.svg"
    },
  ],
};

const experiences = [
  {
    title: "Product Development Intern",
    company_name: "yourEDUGATOR",
    icon: "/youredugator.png",
    iconBg: "#383E56",
    date: "May 2025 - August 2025",
    points: [
      "Worked closely with the CEO to build an AI-powered IELTS Speaking module; integrated Azure Speech SDK, ElevenLabs STT, OpenAI tts-1, elevating speaking practice throughput by 3×.",
      "Built ETL pipelines processing JSON-schema datasets for Reading, Listening, and Writing; used OpenAI API and DALL-E 3 to auto-generate Writing Task-1 diagrams, boosting question bank coverage by 120%",
      "Developed RAG-based internal assistant (LangChain + OpenAI) indexing 200+ design docs, reducing knowledge lookup time by 50%.",
      "Crafted investor pitch deck, used PowerBI and Tableau to visualize company’s performance, performed market research, brainstormed with the CEO in making strategic decisions.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Techsture Technologies",
    icon: "/techsture.png",
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Deployed real-time C-V2X-based Pedestrian Detection and Alert Dissemination ITS testbed; validated 10+ scenarios demonstrating the robustness; achieved <10ms latency with multi-threaded UDP + SNMP monitoring.",
      "Developed and automated TCP/DNS network pipeline for server–RSU and RSU-OBU alerts, streamlining data flow reliability across vehicular networks.",
      "Used OpenStreetMap and JavaFX to develop a dashboard to track the vehicle’s location and display alert messages.",
    ],
  },
  {
    title: "Research Scholar",
    company_name: "MICxN Lab",
    icon: "/micxn.png",
    iconBg: "#383E56",
    date: "Jan 2024 - April 2025",
    points: [
      "Supported faculty and peers by reviewing research papers, summarizing findings, and maintaining organized notes.",
      "Assisted with event coordination for technical workshops, including preparing materials and guiding participants.",
      "Collaborated with colleagues across disciplines, demonstrating adaptability and strong interpersonal skills.",
      "Conducted 5+ technical workshops in other universities on advanced topics, showing my tutoring skills.",
      "Mentored more than 20 junior research scholars on how to approach research and face the challenges while solving research problems.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Ahmedabad University",
    icon: "/ahmedabad.png",
    iconBg: "#E6DEDD",
    date: "August 2024 - March 2025",
    points: [
      "Artificial Intelligence: Assisted professor and a class of 40, including BTech, BSc, MTech, and PhD students.",
      "Embedded System Designs: Managed and evaluated assignments and projects of a class of 130 students.",
      "Predictive Analytics for Business: Helped a class of 60, including BBA and BTech students, with their conceptual queries.",
      "Computer Networks: Currently managing a class of 130 students. Providing C tutorials on file management in lab sessions.",
    ],
  },
];

const education = [
  {
    title: "Master of Science in Computer Science",
    institution: "University of Illinois Chicago",
    icon: "/uic.png",
    date: "2025 - 2027",
    description: "Relevant Coursework: Cloud Computing, Web Application Development, Computer Systems Security, Distributed Systems Computing, Parallel and Distributed Processing",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Ahmedabad University",
    icon: "/ahmedabad.png",
    date: "2021 - 2025",
    description: "Relevant Coursework: Artificial Intelligence, Machine Learning, Advanced Business Analytics, Algorithms, Probabilistic and Graphical Models, Computer Networks",
  },
];

const volunteering = [
  {
    title: "Secretary",
    organization: "Anime Community at Ahmedabad University",
    icon: "/anime.png",
    date: "2024",
    points: [
      "Organized and managed 20+ community events including workshops, screenings, and cultural activities.",
      "Handled registrations, financial reports, and budget planning with data-driven insights for decision-making.",
      "Collaborated with university clubs and student organizations to drive community growth and engagement.",
      "Increased community membership by 150% through strategic outreach and marketing initiatives.",
      "Provided administrative support and maintained detailed records for community activities and finances.",
    ],
  },
  {
    title: "Student Ambassador",
    organization: "Blockheads Cafe",
    icon: "/blockheads.png",
    date: "2024",
    points: [
      "Led awareness campaigns at Ahmedabad University to promote cafe products and services.",
      "Interacted with 100+ customers to gather feedback and provide actionable insights to management.",
      "Developed and executed marketing strategies to increase brand visibility on campus.",
      "Analyzed customer preferences and trends to help optimize product offerings.",
      "Built strong relationships between the organization and student community.",
    ],
  },
  {
    title: "Volunteer",
    organization: "Jivdaya Charitable Trust",
    icon: "/jivdaya.png",
    date: "2022",
    points: [
      "Assisted workers with day-to-day operations including cleaning, food preparation, and medicine distribution.",
      "Led and coordinated volunteer teams to perform tasks efficiently and safely.",
      "Participated in animal care and feeding activities at the shelter.",
      "Demonstrated commitment to animal welfare and community service.",
      "Developed leadership and teamwork skills through hands-on volunteer coordination.",
    ],
  },
];

const projects = [
  {
    name: "Distributed RAG Pipeline using Apache Hadoop",
    image: "/hadoop-original.svg",
    description:
      "A distributed RAG pipeline built on AWS EMR using Hadoop MapReduce to process academic papers, generate embeddings, and perform efficient similarity search with a Lucene HNSW index.",
    tags: [
      { name: "hadoop", color: "blue-text-gradient" },
      { name: "mapreduce", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
      { name: "rag", color: "orange-text-gradient" },
      { name: "lucene", color: "blue-text-gradient" },
      { name: "hnsw", color: "green-text-gradient" },
      { name: "ollama", color: "pink-text-gradient" },
      { name: "scala", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/Distributed-RAG-Pipeline-on-AWS-EMR-using-Apache-Hadoop",
  },
  {
    name: "Distributed Document Embedding Pipeline using Apache Spark",
    image: "/Apache_Spark_logo.svg.png",
    description:
      "This project transforms a standalone document processing script into a distributed, cloud-native Spark application running on AWS EMR. The system ingests multiple PDF files from Amazon S3, extracts text, splits it into semantically coherent chunks, and generates embeddings using an external Ollama API hosted on a separate EC2 instance. The processed data is then written back to S3 as a Delta Lake table, enabling versioned, fault-tolerant, and query-efficient access for downstream analytics.",
    tags: [
      { name: "spark", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "rdd", color: "orange-text-gradient" },
      { name: "delta-lake", color: "pink-text-gradient" },
      { name: "scala", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/Distributed-Document-Embedding-Pipeline-on-AWS-EMR-using-Apache-Spark",
  },
  {
    name: "GraphRAG: A Distributed Knowledge Graph Pipeline",
    image: "/neo4j-original.svg",
    description:
      "A fully distributed GraphRAG system that builds a streaming knowledge graph to support retrieval and reasoning across documents. It combines Apache Flink for dataflow processing, Neo4j for graph storage, Ollama for semantic enrichment, and deterministic NLP signals, with a REST API for querying and explanation.",
    tags: [
      { name: "flink", color: "blue-text-gradient" },
      { name: "neo4j", color: "green-text-gradient" },
      { name: "llm-inference", color: "orange-text-gradient" },
      { name: "cypher-queries", color: "pink-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "scala", color: "blue-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/GraphRAG-A-Distributed-Knowledge-Graph-Pipeline-Using-Apache-Flink-Neo4j-LLMs",
  },
  {
    name: "Campus ARt",
    image: "ar-logo.webp",
    description:
      "An interactive campus map that lets students unlock virtual art hotspots by physically visiting locations. Users can enter an AR space, leave notes or sketches on a shared canvas, and see contributions from others who visit the same spot.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "node.js", color: "orange-text-gradient" },
      { name: "webxr", color: "pink-text-gradient" },
      { name: "websockets", color: "orange-text-gradient" },
      { name: "geolocation", color: "green-text-gradient" },
      { name: "mind-ar", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "vercel", color: "blue-text-gradient" },
    ],
    source_code_link: "https://campus-art.vercel.app/",
  },
  {
    name: "Harry Potter Quidditch Champions",
    image: "flask-logo.svg",
    description:
      "A Harry Potter–themed Quidditch tournament management platform that allows users to register teams, book match tickets, and receive real-time confirmations. The system includes an admin portal for scheduling matches and managing events, along with secure online payments and automated email notifications.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "mongo-db", color: "orange-text-gradient" },
      { name: "stripe", color: "pink-text-gradient" },
      { name: "gunicorn", color: "orange-text-gradient" },
    ],
    source_code_link: "https://hpquidditch.onrender.com/",
  },
  {
    name: "Battle Painters",
    image: "python-original.svg",
    description:
      "A real-time interactive multiplayer painting game built using Computer Vision. Players use hand gestures detected via webcam to paint inside a shared canvas. Each hand is assigned a color, and the winner is determined based on pixel coverage within a defined region.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "computer-vision", color: "green-text-gradient" },
      { name: "mediapipe", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/battle_painters",
  },
  {
    name: "Ping Pong",
    image: "python-original.svg",
    description:
      "A real-time gesture-controlled Pong-style game built using Computer Vision. Players use their hands as paddles, tracked live through a webcam, to bounce a ball and score points. This project demonstrates interactive CV-based gameplay using hand tracking, collision detection, and real-time rendering.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "cvzone", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/battle_painters",
  },
  {
    name: "End-to-End Machine Learning Pipeline with MLOps",
    image: "python-original.svg",
    description:
      "An end-to-end Machine Learning project demonstrating the complete lifecycle of a real-world ML system — from data exploration and feature engineering to model training, evaluation, deployment, and frontend integration. This project focuses on building a production-ready ML pipeline using CatBoost, wrapped with clean modular design and connected to a web-based frontend for real-time inference.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "flask", color: "orange-text-gradient" },
      { name: "data-science", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/Preet0504/battle_painters",
  },
  {
    name: "Campus Scout",
    image: "react-original.svg",
    description:
      "This work is currently under construction...",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "vite", color: "orange-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" }
    ],
    source_code_link: "https://campus-scout.vercel.app/",
  },
  {
    name: "Aca-d-ashboard",
    image: "typescript-original.svg",
    description:
      "This work is currently under construction...",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "vite", color: "orange-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
      { name: "supabase", color: "blue-text-gradient" },
      { name: "bun", color: "green-text-gradient" },
      { name: "vite", color: "orange-text-gradient" },
      { name: "react", color: "pink-text-gradient" }
    ],
    source_code_link: "https://acadashboard.vercel.app/",
  },
];

const publications = [
  {
    title: "Capacity Analysis of Vehicular Networks in a Multi-User Mixed-Traffic Scenario",
    authors: "Preet Patel, Dhaval K. Patel",
    date: "2025",
    conference: "2025 National Conference on Communications (NCC)",
    description: "The majority of vehicular network studies rely on the idealized assumption of every vehicle being connected and autonomous. The coexistence of CAVs and Regular Vehicles (RVs) has remained an under-explored area and shown new challenges in understanding the communication capacity required to support efficient vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. In this paper, we present a capacity analysis of cooperative vehicular networks (VNs) in mixed traffic comprising multiple users with download requests, transmitters, and RVs. We study the impact of RVs on the capacity of vehicular networks (VNs). We also perform Monte Carlo simulation that shows the effectiveness of the proposed analytical framework. The results show that the capacity highly depends on the proportion of vehicles, density, inter-infrastructure distance, and sensing range of transmitters. The results can guide the optimum deployment of infrastructures and set the network configurations and traffic policies to ensure reliable communication.",
    link: "https://ieeexplore.ieee.org/abstract/document/10983153",
  },
];

const certifications = [
  {
    title: "Deep Learning with TensorFlow",
    issuer: "Cognitive Class",
    date: "Jul 2024",
    credential_id: "d9d6b17f3b3c4d18be4a0aa8c5428a92",
    credential_url: "https://courses.cognitiveclass.ai/certificates/d9d6b17f3b3c4d18be4a0aa8c5428a92",
    logo: "/cognitiveclass.png",
  },
  {
    title: "HackerRank Skill Assessment (Problem Solving)",
    issuer: "HackerRank",
    date: "Feb 2024",
    credential_id: "A861596D4FA2",
    credential_url: "https://www.hackerrank.com/certificates/A861596D4FA2",
    logo: "hackerrank.png",
  },
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "Feb 2024",
    credential_id: "UC-f98dba57-1e37-43ee-a308-2003eff877ab",
    credential_url: "http://ude.my/UC-f98dba57-1e37-43ee-a308-2003eff877ab",
    logo: "udemy.png",
  },
  {
    title: "HackerRank Skill Assessment (SQL)",
    issuer: "HackerRank",
    date: "Jan 2024",
    credential_id: "31268C2B8A3B",
    credential_url: "https://www.hackerrank.com/certificates/31268c2b8a3b",
    logo: "hackerrank.png",
  },
  {
    title: "HackerRank Skill Assessment (Python)",
    issuer: "HackerRank",
    date: "Oct 2022",
    credential_id: "266B3E434DD2",
    credential_url: "https://www.hackerrank.com/certificates/266b3e434dd2",
    logo: "hackerrank.png",
  },
];

export { services, technologies, experiences, education, volunteering, projects, publications, certifications };
