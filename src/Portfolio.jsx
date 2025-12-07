import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Menu,
  X,
  Code,
  Database,
  Terminal,
  Zap,
  Layers,
  Server,
  Smartphone,
  Computer,
  Syringe,
  Book,
} from "lucide-react";
import { getExperienceYears } from "./utils/utils";

export default function DeveloperPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const years = getExperienceYears(2018, 4);

  const roles = [
    "Android Developer",
    "Backend Developer",
    "HAPI FHIR SDK developer",
    "Corebanking Applications Developer",
    "DevOps Enthusiast",
    "Tech Team Lead",
    "Open Source Contributor",
  ];
  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = {
    android: [
      "React Native",
      "Java",
      "Kotlin",
      "Flutter",
      "Live Data",
      "Dagger and Hilt",
      "Jetpack Compose",
      "Retriofit",
      "ViewModel",
      "Redux",
      "React Navigation",
    ],
    backend: [
      "Java",
      "Python",
      "Kotlin",
      "Django",
      "REST APIs",
      "Spring and Springboot",
      "Spring Security",
      "Ktor and Koin",
      "Scala with Play Framework",
      "Docker",
      "Kubernetes",
      "Redis",
      "RabbitMQ",
      "Apache Kafka",
    ],
    database: [
      "PostgreSQL",
      "MongoDB",
      "CockroachDB",
      "TimescaleDB",
      "AWS Aurora",
      "SQLite",
      "Room Database",
      "Realm DB",
      "Firebase Realtime Database",
      "Firebase Firestore",
      "Oracle DB",
      "MySQL",
      "SQL Server",
      "Redis",
    ],
    cicd: [
      "Git",
      "Grafana Loki",
      "Prometheus",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "HashiCorp Vault",
      "Istio",
      "F5",
      "SonarQube",
      "WS02",
    ],
    cloud: ["AWS", "Google Cloud", "Azure", "Openshift", "Digital Ocean", "Heroku", "Vercel", "Netlify"],
    specialization: ["T24", "Hapi FHIR SDK", "Integrations", "Data Pipelines", "Linux Administration"],
    tools: [
      "GraphQL (Apollo Server 4)",
      "gRPC",
      "tRPC",
      "WebSocket",
      "Server-Sent Events",
      "Apache Kafka",
      "RabbitMQ",
      "WebAssembly",
      "Cloudflare Workers",
      "Vercel Edge Functions",
    ],
    networking: [
      "C++",
      "Socket Programming",
      "Network Protocols",
      "TCP/IP",
      "UDP",
      "HTTP/HTTPS",
      "DNS",
      "DHCP",
      "Multicast",
      "Routing Protocols",
      "Multiplexing",
      "Network Security",
    ],
  };

  const projects = [
    {
      name: "Agency Banking solution",
      description:
        "Enhanced an existing agency banking platform by integrating new features, improving security protocols, and optimizing performance for high transaction volumes.",
      tech: [
        "Android",
        "Java",
        "Spring",
        "REST API",
        "Oracle",
        "T24",
        "Openshift",
        "Kubernetes",
        "Docker",
        "Integration",
      ],
      category: "Financial/Android/Backend",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Bancassurance Platform",
      description:
        "Developed a comprehensive bancassurance platform that seamlessly integrates banking and insurance services, providing users with a unified experience for managing their financial and insurance needs.",
      tech: [
        "Java",
        "Spring Boot",
        "Kotlin",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "T24",
        "Integration",
        "Insurance",
        "Oracle",
      ],
      category: "Insurance/Financial/Backend",
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: "ATM card processing System",
      description:
        "Built a robust ATM card processing system that handles card issuance, activation, and transaction processing with high security and reliability.",
      tech: [
        "Java",
        "Spring",
        "Kotlin",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "T24",
        "Integration",
        "Card Services",
        "ISO 8583",
      ],
      category: "Financial/Backend/Card Services",
      icon: <Computer className="w-6 h-6" />,
    },
    {
      name: "WHO ANC Mobile Application",
      description:
        "Developed a mobile application for antenatal care based on WHO guidelines. The app provides healthcare workers with tools for patient management, data collection, and health education.",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Live Data",
        "Android",
        "JavaScript",
        "FHIR",
        "Google FHIR SDK",
        "Firebase",
        "REST API",
        "WHO Guidelines",
      ],
      category: "Android/Health/FHIR",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      name: "WHO Child Immunization App",
      description:
        "Created a mobile application to support child immunization programs based on WHO guidelines. The app assists healthcare workers in tracking immunization schedules, recording vaccinations, and educating parents.",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Live Data",
        "Android",
        "JavaScript",
        "FHIR",
        "Google FHIR SDK",
        "Firebase",
        "WHO Guidelines",
      ],
      category: "Android/Health/FHIR",
      icon: <Syringe className="w-6 h-6" />,
    },
    {
      name: "Checkpoint Ordering System",
      description:
        "Built a backend system for managing checkpoint orders, including order placement, tracking, and fulfillment processes for KCB Bank Tanzania",
      tech: [
        "Java",
        "Spring Boot",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "T24",
        "Integration",
        "Event-Driven Architecture",
        "RabbitMQ",
        "Microservices",
      ],
      category: "Fiancial/Backend",
      icon: <Book className="w-6 h-6" />,
    },
  ];

  const experience = [
    {
      title: "Senior Applications Developer",
      company: "KCB Bank Group",
      period: "Oct 2024 – Present",
      description:
        "Lead developer for projects involving backend systems, API development, and integration with core banking platforms.",
      achievements: [
        "Spearheaded the development of microservices architecture for banking applications",
        "Integrated multiple third-party services to enhance banking functionalities",
        "Optimized backend processes leading to a 30% reduction in transaction processing time",
        "Mentored junior developers and conducted code reviews to ensure high-quality code",
        "Build insurance and agency banking solutions using T24 core banking system",
        "Led the migration of legacy systems to modern cloud-based architectures",
        "Migrated core banking applications to Kubernetes and OpenShift environments",
        "Implemented CI/CD pipelines using GitHub Actions and Terraform for automated deployments",
        "Build a modern ATM card processing system integrated with T24",
        "Build a modern Agency banking solution integrated with T24",
        "Build a modern Bancassurance platform integrated with Corebanking systems",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "ONA Kenya Ltd",
      period: "Nov 2021 – Sep 2024",
      description: "Developed HAPI FHIR SDK and built geospatial andoird applications for various clients.",
      achievements: [
        "Contributed to the HAPI FHIR SDK, enhancing its capabilities for healthcare application development",
        "Developed Android applications for health data collection and management using FHIR standards",
        "Implemented geospatial data solutions for clients in the health and infrastructure sectors",
        "Collaborated with cross-functional teams to deliver high-quality software solutions on time",
        "Optimized application performance, resulting in a 25% improvement in data processing speeds",
        "Led the development of a mobile health application used by over 10,000 healthcare workers",
        "Integrated FHIR-based applications with existing health information systems",
        "Provided technical training and support to clients on using FHIR standards in their applications",
        "Enhanced the HAPI FHIR SDK to support new FHIR resources and improve performance",
      ],
    },
    {
      title: "Applications Developer",
      company: "KCB Bank Group",
      period: "Sept 2018 – Oct 2021",
      description: "Developed and maintained banking applications, focusing on backend services and integrations.",
      achievements: [
        "Developed backend services for banking applications using Java and Spring Boot",
        "Integrated applications with core banking systems like T24 and Finacle",
        "Improved application reliability and performance through code optimization and refactoring",
        "Collaborated with business analysts to gather requirements and deliver solutions that met client needs",
        "Build Checkpoint ordering system integrated with T24 for KCB Bank Tanzania",
        "Build card ordering system integrated with T24 for KCB Bank Kenya",
        "Enhanced a System to post transactions from external systems to T24 using REST APIs",
        "Participated in the full software development lifecycle, from design to deployment",
        "Provided ongoing maintenance and support for existing banking applications",
      ],
    },
    {
      title: "Software engineer Intern",
      company: "SimbaTech Solutions Ltd",
      period: "April 2018 – Sept 2018",
      description: "Developed Financle software solutions and provided technical support for various projects.",
      achievements: [
        "Built modules for Finacle core banking system to enhance functionality",
        "Provided technical support and troubleshooting for existing applications",
        "Collaborated with senior developers to learn best practices and improve coding skills",
        "Participated in code reviews and contributed to team knowledge sharing sessions",
        "Build Credit card module for Finacle core banking system for Victoria Commercial Bank",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-emerald-400 transition-colors ${
                    activeSection === section ? "text-emerald-400" : "text-gray-300"
                  }`}>
                  {section}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "skills", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded-md transition-colors">
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Code className="w-16 h-16 mx-auto text-emerald-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sebastian Mutuku
            </span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-emerald-400 font-semibold border-r-2 border-emerald-400 pr-1">{displayText}</span>
          </div>
          <div className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 space-y-6">
            <b>Profession Summary</b>
            <p>
              Android and Web Backend Engineer with {years}+ years of experience — an innovative and talented software
              developer with strong proficiency in Java, Spring, Spring Boot, Kotlin Spring, and Ktor with Koin, and web
              service creation (SOAP and REST).
            </p>
            <p>
              Experienced in Scala, Python, Django, Kotlin, and cloud-native development. Skilled in Git and Git
              Workflows, with certifications in CI/CD using GitHub Actions and Microsoft Team Foundation Git.
            </p>

            <p>
              Deep knowledge of Docker, Kubernetes, OpenShift, Spring Cloud, and Configuration Server. Proficient in
              Linux, shell scripting, and deployment on Linux environments.
            </p>

            <p>
              Experienced in developing frontends with React Native (Android & iOS), Flutter (cross-platform), and React
              JS. Worked extensively with financial applications including Temenos and Finacle, and their related
              systems.
            </p>

            <p>
              Specialized in building health-related software using the Google FHIR SDK and FHIR Resources. Experienced
              with the J-easy Rules Engine for implementing complex business logic.
            </p>

            <p>
              Strong focus on scalable backend architecture, DevOps automation, and delivering high-quality,
              production-ready software.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all hover:scale-105">
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Software Developer and Solutions provider</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                Android and Web Backend Engineer with {years}+ years of experience — an innovative and talented software
                developer with strong proficiency in Java, Spring, Spring Boot, Kotlin Spring, and Ktor with Koin, and
                web service creation (SOAP and REST). Experienced in Scala, Python, Django, Kotlin, and cloud-native
                development. Skilled in Git and Git Workflows, with certifications in CI/CD using GitHub Actions and
                Microsoft Team Foundation Git. Deep knowledge of Docker, Kubernetes, OpenShift, Spring Cloud, and
                Configuration Server. Proficient in Linux, shell scripting, and deployment on Linux environments.
                Experienced in developing frontends with React Native (Android & iOS), Flutter (cross-platform), and
                React JS. Worked extensively with financial applications including Temenos and Finacle, and their
                related systems. Specialized in building health-related software using the Google FHIR SDK and FHIR
                Resources. Experienced with the J-easy Rules Engine for implementing complex business logic. Strong
                focus on scalable backend architecture, DevOps automation, and delivering high-quality, production-ready
                software.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                My expertise spans from architecting scalable APIs, Android Applications and building Financial and
                Health related solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Currently a holders degree in Bachelor of Science, Elctronics major in computer engineering
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h4 className="text-xl font-bold text-emerald-400 mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    {years}+ years of development experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Android and Backend developer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Networking Developer with c++
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Deployment & DevOps Enthusiast
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Team Lead & Technical Mentor
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    HAPI FHIR SDK contribution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Corebaking Applications Developer (T24 and Financial)
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:sebastian.muthiani@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-lg transition-all">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://github.com/SebaMutuku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-3 rounded-lg transition-all">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            I have vast experience building financial and health related software solutions. Here are some of my recent
            projects that showcase my skills and expertise.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-justify">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">{project.icon}</div>
                  <span className="px-3 py-1 bg-slate-800 text-emerald-400 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, skills], index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 capitalize flex items-center gap-2">
                  {category === "android" && <Smartphone className="w-5 h-5" />}
                  {category === "backend" && <Server className="w-5 h-5" />}
                  {category === "database" && <Database className="w-5 h-5" />}
                  {category === "tools" && <Terminal className="w-5 h-5" />}
                  {category === "cloud" && <Layers className="w-5 h-5" />}
                  {category === "specialization" && <Zap className="w-5 h-5" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm hover:bg-emerald-500/20 hover:text-emerald-400 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">{job.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{job.company}</p>
                    <p className="text-gray-400 italic">{job.description}</p>
                  </div>
                  <span className="text-emerald-400 font-semibold mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Hire me for your next project!
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Want quality software development services? Reach out to discuss your project requirements and how I can
            help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:sebastian.muthiani@gmail.com"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              sebastian.muthiani@gmail.com
            </a>
            <a
              href="tel:+254719700312"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              +254 727 538818
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/SebaMutuku"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:sebastian.muthiani@gmail.com"
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400 relative z-10">
          <p className="mb-2">Designed & Built by Sebastian Mutuku</p>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
