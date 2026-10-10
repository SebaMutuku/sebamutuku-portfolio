import { Smartphone, Database, Computer, Syringe, Book, Monitor, Server, Layers, Zap, Terminal, Globe, Cloud } from "lucide-react";

export const NAV = ["home", "about", "projects", "skills", "experience", "contact"];

export const ROLES = [
  "Senior Backend Engineer",
  "Android Developer",
  "Core Banking Specialist (T24)",
  "HAPI FHIR SDK Contributor",
  "DevOps Enthusiast",
  "Tech Team Lead",
  "Open Source Contributor",
];

export const MARQUEE = [
  "Java",
  "Spring Boot",
  "Kotlin",
  "Temenos T24",
  "Kubernetes",
  "OpenShift",
  "Apache Kafka",
  "RabbitMQ",
  "PostgreSQL",
  "Jetpack Compose",
  "HAPI FHIR",
  "Docker",
  "Terraform",
  "Quarkus",
  "WSO2",
  "HashiCorp Vault",
  "ISO 8583",
  "C++",
];

export const techStack = {
  backend: {
    icon: Server,
    items: [
      "Java",
      "Kotlin",
      "Python",
      "Django",
      "REST APIs",
      "Spring & Spring Boot",
      "Spring Security",
      "Ktor & Koin",
      "Scala with Play Framework",
      "Docker",
      "Kubernetes",
      "Redis",
      "RabbitMQ",
      "Apache Kafka",
    ],
  },
  android: {
    icon: Smartphone,
    items: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "LiveData",
      "ViewModel",
      "Dagger & Hilt",
      "Retrofit",
      "React Native",
      "Flutter",
      "Redux",
      "React Navigation",
    ],
  },
  database: {
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "CockroachDB",
      "TimescaleDB",
      "AWS Aurora",
      "Oracle DB",
      "MySQL",
      "SQL Server",
      "SQLite",
      "Room Database",
      "Realm DB",
      "Firebase Realtime Database",
      "Firebase Firestore",
      "Redis",
    ],
  },
  "ci / cd & ops": {
    icon: Layers,
    items: [
      "Git",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana Loki",
      "HashiCorp Vault",
      "Istio",
      "F5",
      "SonarQube",
      "WSO2",
    ],
  },
  cloud: {
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Azure", "OpenShift", "Digital Ocean", "Heroku", "Vercel", "Netlify"],
  },
  specialization: {
    icon: Zap,
    items: ["Temenos T24", "HAPI FHIR SDK", "Integrations", "Data Pipelines", "Linux Administration"],
  },
  "protocols & tooling": {
    icon: Terminal,
    items: [
      "GraphQL (Apollo Server 4)",
      "gRPC",
      "tRPC",
      "WebSocket",
      "Server-Sent Events",
      "WebAssembly",
      "Cloudflare Workers",
      "Vercel Edge Functions",
    ],
  },
  networking: {
    icon: Globe,
    items: [
      "C++",
      "Socket Programming",
      "Network Protocols",
      "TCP/IP",
      "UDP",
      "HTTP/HTTPS",
      "DNS",
      "DHCP",
      "Multicasting",
      "Broadcasting",
      "Routing Protocols",
      "Multiplexing",
      "Network Security",
    ],
  },
};

export const FILTERS = ["All", "Financial", "Health", "Android", "Backend"];

export const projects = [
  {
    name: "Agency Banking Solution",
    description:
      "Enhanced an existing agency banking platform by integrating new features, improving security protocols, and optimizing performance for high transaction volumes.",
    tech: ["Android", "Java", "Spring", "REST API", "Oracle", "T24", "OpenShift", "Kubernetes", "Docker"],
    tags: ["Financial", "Android", "Backend"],
    icon: Smartphone,
  },
  {
    name: "Bancassurance Platform",
    description:
      "Developed a comprehensive bancassurance platform that integrates banking and insurance services, giving users a unified experience for managing their financial and insurance needs.",
    tech: ["Java", "Spring Boot", "Kotlin", "REST API", "PostgreSQL", "Docker", "Kubernetes", "T24", "Oracle"],
    tags: ["Financial", "Backend"],
    icon: Database,
  },
  {
    name: "ATM Card Processing System",
    description:
      "Built a robust ATM card processing system that handles card issuance, activation, and transaction processing with high security and reliability.",
    tech: ["Java", "Spring", "Kotlin", "REST API", "PostgreSQL", "Docker", "Kubernetes", "T24", "ISO 8583"],
    tags: ["Financial", "Backend"],
    icon: Computer,
  },
  {
    name: "WHO ANC System",
    description:
      "Developed a mobile application for antenatal care based on WHO guidelines, giving healthcare workers tools for patient management, data collection, and health education.",
    tech: ["Kotlin", "Jetpack Compose", "LiveData", "FHIR", "Google FHIR SDK", "Firebase", "WHO Smart Guidelines"],
    tags: ["Health", "Android"],
    icon: Syringe,
  },
  {
    name: "WHO Child Immunization",
    description:
      "Created a mobile application supporting child immunization programs based on WHO guidelines, helping healthcare workers track schedules, record vaccinations, and educate parents.",
    tech: ["Kotlin", "Jetpack Compose", "LiveData", "FHIR", "Google FHIR SDK", "Firebase", "WHO Guidelines"],
    tags: ["Health", "Android"],
    icon: Syringe,
  },
  {
    name: "Checkbook Ordering System",
    description:
      "Built a backend system for managing checkbook orders — placement, tracking, and fulfilment — for KCB Bank Tanzania.",
    tech: ["Java", "Spring Boot", "REST API", "PostgreSQL", "OpenShift", "T24", "RabbitMQ", "Microservices"],
    tags: ["Financial", "Backend"],
    icon: Book,
  },
  {
    name: "School Gear Payment System",
    description:
      "Developed a generic backend to facilitate school fee and school-supply payments, enabling parents and guardians to pay securely online for KCB Bank Rwanda / BPR Bank.",
    tech: ["Java", "Quarkus", "Oracle", "OpenShift", "T24", "Apache Kafka", "WSO2", "Istio", "Microservices"],
    tags: ["Financial", "Backend"],
    icon: Monitor,
  },
];

export const experience = [
  {
    title: "Senior Applications Developer",
    company: "KCB Bank Group",
    period: "Oct 2024 – Present",
    current: true,
    description:
      "Lead developer for projects spanning backend systems, API development, and integration with core banking platforms.",
    achievements: [
      "Spearheaded a microservices architecture for banking applications",
      "Reduced transaction processing time by 30% through backend optimisation",
      "Migrated core banking applications to Kubernetes and OpenShift",
      "Introduced a configuration server and HashiCorp Vault for secure configuration management",
      "Built a modern ATM card processing system, Agency Banking solution and Bancassurance platform, all integrated with T24",
      "Mentored junior developers and led code reviews",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "ONA Kenya Ltd",
    period: "Nov 2021 – Sep 2024",
    description: "Contributed to the HAPI FHIR SDK and built geospatial Android applications for various clients.",
    achievements: [
      "Led development of a mobile health app used by over 120,000 healthcare workers",
      "Enhanced the HAPI FHIR SDK with new FHIR resources and better performance",
      "Improved application data-processing speed by 25%",
      "Delivered geospatial solutions for health and infrastructure clients",
      "Integrated FHIR-based applications with existing health information systems",
      "Trained and supported clients on adopting FHIR standards",
    ],
  },
  {
    title: "Applications Developer",
    company: "KCB Bank Group",
    period: "Sept 2018 – Oct 2021",
    description: "Developed and maintained banking applications, focusing on backend services and integrations.",
    achievements: [
      "Built backend services with Java and Spring Boot, integrated with T24 and Finacle",
      "Delivered the Checkbook ordering system for KCB Tanzania and a card ordering system for KCB Kenya",
      "Enhanced a system that posts external transactions to T24 via REST APIs",
      "Improved reliability and performance through refactoring and optimisation",
      "Worked across the full SDLC, from requirements with business analysts to deployment and support",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "SimbaTech Solutions Ltd",
    period: "Apr 2018 – Aug 2018",
    description: "Developed Finacle software modules and provided technical support across projects.",
    achievements: [
      "Built a credit card module on Finacle core banking for Victoria Commercial Bank",
      "Provided technical support and troubleshooting for existing applications",
      "Participated in code reviews and team knowledge-sharing sessions",
    ],
  },
];
