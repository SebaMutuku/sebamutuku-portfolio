import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, MapPin, Menu, X, Code, Database, Globe, Terminal, Zap, Layers, Server, Smartphone } from 'lucide-react';
import Logo from './assets/logo.png';

export default function DeveloperPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'GIS Developer'
  ];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
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
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'OpenLayers', 'Plotly'],
    backend: ['Python', 'Node.js', 'Django', 'REST APIs', 'FastAPI'],
    database: ['PostgreSQL', 'MongoDB', 'SQL', 'PostGIS', 'Spatial Databases'],
    tools: ['Git', 'Docker', 'VS Code', 'Postman', 'GitHub Actions'],
    cloud: ['AWS', 'Google Cloud', 'ArcGIS Online'],
    specialization: ['GDAL', 'Google Earth Engine', 'Machine Learning', 'Data Pipelines', 'Web Mapping']
  };

  const projects = [
    {
      name: 'JazaMiti Verification Platform',
      description: 'Full-stack mobile and web platform for tree planting verification using satellite imagery and geolocation. Built with React Native, Python backend, and integrated real-time mapping.',
      tech: ['React Native', 'Python', 'PostgreSQL', 'REST API', 'Satellite Data'],
      category: 'Full-Stack',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: 'FoTIMS & PDMIS Systems',
      description: 'Enterprise geospatial monitoring systems for government field activities. Developed data integration pipelines, RESTful APIs, and interactive dashboards.',
      tech: ['Django', 'PostgreSQL', 'React', 'OpenLayers', 'Data Integration'],
      category: 'Backend/Data',
      icon: <Database className="w-6 h-6" />
    },
    {
      name: 'Wheels for Climate Dashboard',
      description: 'Interactive web mapping application visualizing cycling routes from Kenya to Brazil for COP30. Features real-time tracking, route analytics, and social engagement.',
      tech: ['React', 'OpenLayers', 'JavaScript', 'Plotly', 'REST API'],
      category: 'Frontend/Mapping',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Vibrama GIS Platform',
      description: 'Custom GIS-enabled platform for environmental and spatial data analysis. Built complete backend infrastructure with spatial queries and data visualization.',
      tech: ['Python', 'PostGIS', 'React', 'GDAL', 'Web Services'],
      category: 'Full-Stack',
      icon: <Layers className="w-6 h-6" />
    },
    {
      name: 'Real-Time Monitoring Dashboards',
      description: 'Developed multiple interactive dashboards for infrastructure and environmental monitoring. Integrated with various data sources and APIs.',
      tech: ['React', 'Power BI', 'Python', 'WebSockets', 'Chart.js'],
      category: 'Frontend',
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: 'Geospatial API Services',
      description: 'Built and maintained RESTful APIs for geospatial data access, processing, and analysis. Handles millions of spatial records with optimized queries.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      category: 'Backend',
      icon: <Server className="w-6 h-6" />
    }
  ];

  const experience = [
    {
      title: 'Backend Developer & Data Officer',
      company: 'Ministry of Environment (DRSRS)',
      period: '2022 – Present',
      description: 'Lead developer for national-level environmental monitoring systems supporting the 15 Billion Tree Program.',
      achievements: [
        'Architected and deployed scalable backend systems handling millions of spatial records',
        'Built RESTful APIs and data pipelines for satellite imagery processing and analysis',
        'Integrated machine learning models for predictive environmental analytics',
        'Led development team in agile environment, mentoring junior developers',
        'Implemented CI/CD pipelines and automated testing frameworks'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'JNAM Technologies',
      period: '2020 – 2023',
      description: 'Designed and developed interactive web applications and real-time monitoring systems.',
      achievements: [
        'Built responsive web applications using React and modern JavaScript',
        'Developed interactive mapping interfaces with Leaflet and custom visualizations',
        'Integrated frontend applications with backend APIs and WebSocket connections',
        'Optimized application performance achieving 90+ Lighthouse scores'
      ]
    },
    {
      title: 'Geospatial Data Officer',
      company: 'Kenya Power & Lighting Company (KPLC)',
      period: '2021 – 2022',
      description: 'Developed geospatial solutions for infrastructure management and expansion projects.',
      achievements: [
        'Built custom tools for infrastructure mapping and spatial analysis',
        'Developed automated data processing pipelines reducing manual work by 70%',
        'Created internal dashboards for asset management and planning'
      ]
    },
    {
      title: 'Software Development Trainer',
      company: 'Riccatti College',
      period: '2019 – 2021',
      description: 'Taught programming fundamentals and web development to students.',
      achievements: [
        'Delivered comprehensive courses in Python, JavaScript, and Web Development',
        'Mentored students in building real-world software projects',
        'Developed curriculum for GIS-based software applications'
      ]
    }
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
            <div className="flex items-center gap-2 text-xl font-bold w-40 h-40">
              <img src={Logo} alt="" />
              {/* <Terminal className="w-6 h-6 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AM_DEV
              </span> */}
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-emerald-400 transition-colors ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded-md transition-colors"
                >
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
            Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Alphonce Mutuku
            </span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-emerald-400 font-semibold border-r-2 border-emerald-400 pr-1">
              {displayText}
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Full-stack developer with 5+ years of experience building scalable web applications, 
            data-driven systems, and geospatial solutions. Passionate about clean code, innovative 
            solutions, and creating impactful software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all hover:scale-105"
            >
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
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Software Developer & Problem Solver</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                I'm a versatile full-stack developer specializing in building robust backend systems, 
                intuitive frontend interfaces, and data-driven applications. With a strong foundation 
                in both computer science and geoinformation technology, I bring a unique perspective 
                to software development.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                My expertise spans from architecting scalable APIs and databases to crafting responsive 
                React applications. I'm particularly passionate about integrating spatial data, machine 
                learning, and modern web technologies to solve complex real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Currently pursuing my MSc in Data Science while leading development teams at DRSRS, where I build systems that support environmental monitoring and national 
                initiatives.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h4 className="text-xl font-bold text-emerald-400 mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    5+ years of development experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Full-Stack Software Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Data Science & Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    BTech in Geoinformation Technology
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Team Lead & Technical Mentor
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <a 
                  href="mailto:alphonce202@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-lg transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a 
                  href="https://github.com/uhqlA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-3 rounded-lg transition-all"
                >
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
            A collection of my recent work showcasing full-stack development and technical expertise
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-justify">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 bg-slate-800 text-emerald-400 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs"
                    >
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
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all"
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-4 capitalize flex items-center gap-2">
                  {category === 'frontend' && <Globe className="w-5 h-5" />}
                  {category === 'backend' && <Server className="w-5 h-5" />}
                  {category === 'database' && <Database className="w-5 h-5" />}
                  {category === 'tools' && <Terminal className="w-5 h-5" />}
                  {category === 'cloud' && <Layers className="w-5 h-5" />}
                  {category === 'specialization' && <Zap className="w-5 h-5" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm hover:bg-emerald-500/20 hover:text-emerald-400 transition-all cursor-default"
                    >
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
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all"
              >
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
              Let's Build Something Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in hearing about new projects, opportunities, and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="mailto:alphonce202@gmail.com"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              alphonce202@gmail.com
            </a>
            <a 
              href="tel:+254719700312"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +254 719 700 312
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/uhqlA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alphonce202@gmail.com"
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all hover:scale-110"
            >
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
          <p className="mb-2">Designed & Built by Alphonce Mutuku</p>
          <p className="text-sm">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}