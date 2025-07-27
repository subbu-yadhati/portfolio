import React, { useState, useEffect } from 'react';
import profile from './profile.png';
import {
  Home,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  ChevronUp,
  Calendar,
  Award,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills = {
    'Programming Languages': ['Java', 'Python', 'C', 'C++', 'JavaScript'],
    'Web Technologies': ['HTML', 'CSS', 'React', 'Express'],
    'Databases': ['SQL', 'MongoDB'],
    'Tools': ['Git', 'GitHub', 'VS Code'],
    'Concepts': ['OOP', 'DBMS', 'DSA']
  };

  const projects = [
    {
      category: 'Internships',
      items: [
        {
          title: 'Hotel Booking System',
          company: 'Ethnus',
          description: 'Developed a comprehensive hotel booking system with separate admin and user dashboards, featuring room management, booking system, and user authentication.',
          tech: ['React', 'Node.js', 'MongoDB', 'Express']
        },
        {
          title: 'Web Development Projects',
          company: 'Prodigy InfoTech',
          description: 'Created multiple web projects including landing pages, interactive Tic-Tac-Toe game, stopwatch application, and portfolio websites.',
          tech: ['HTML', 'CSS', 'JavaScript', 'React']
        }
      ]
    },
    {
      category: 'Personal Projects',
      items: [
        {
          title: 'Portfolio Website',
          description: 'Responsive personal portfolio website built with React.js and Tailwind CSS, featuring dark mode, smooth animations, and modern UI design.',
          tech: ['React', 'Tailwind CSS', 'JavaScript']
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'VIT-AP University',
      period: '2023 - 2027',
      grade: 'CGPA: 9.27'
    },
    {
      degree: 'Intermediate',
      institution: 'S.R Jr College',
      period: '2021 - 2023',
      grade: '97.1%'
    },
    {
      degree: 'SSC',
      institution: 'ZPHS Palukur',
      period: '2020 - 2021',
      grade: '99.67%'
    }
  ];

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
      } shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Subbarayudu Yadhati
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`transition-colors duration-200 ${activeSection === id
                  ? 'text-blue-600 font-semibold'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${activeSection === id
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomeSection = () => (
    <section className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-br' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl`}>
          <img src={profile} alt="" className='rounded-full' />
        </div>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
          Subbarayudu Yadhati
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'
          } font-semibold`}>
          Aspiring Full-Stack Developer
        </p>
        <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
          "Solving real-world problems with clean, efficient code."
        </p>
        <a href="/resume.pdf" download>
          <button className="hover:bg-blue-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <Download size={20} />
            <span>View Resume</span>
          </button>
        </a>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>About Me</h2>
        <div className="grid gap-12 items-center">
          <div>
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              I'm a passionate Computer Science Engineering student at VIT-AP University with a strong foundation in full-stack development. Currently maintaining a CGPA of 9.27, I'm dedicated to creating innovative solutions that bridge the gap between technology and user experience.
            </p>
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Interests</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Building user-friendly websites</li>
                <li>• Exploring Data Science</li>
                <li>• Working on real-world challenges</li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/subbu-yadhati" className="p-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/subbarayudu-yadhati-a63727331/" className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/subbu_yadhati/" className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Projects & Internships</h2>
        {projects.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>{category.category}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((project, projectIndex) => (
                <div key={projectIndex} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h4>
                  {project.company && (
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      } font-medium`}>{project.company}</p>
                  )}
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/30 text-white' : 'bg-blue-100'
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
              } rounded-xl p-6 border`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`px-3 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                    } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const EducationSection = () => (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } rounded-xl p-6 border shadow-lg`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                  } flex-shrink-0`}>
                  <GraduationCap className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{edu.degree}</h3>
                  <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium mb-1`}>
                    {edu.institution}
                  </p>
                  <div className={`flex items-center space-x-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                <MapPin className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} size={24} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Location</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Nandyal, Andhra Pradesh
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                <Mail className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} size={24} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  subbarayuduyadhati@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                <Phone className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} size={24} />
              </div>
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Phone</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  7386623536
                </p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Connect with me</h3>
                          <div className="flex space-x-4">
              <a href="https://github.com/subbu-yadhati" className="p-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/subbarayudu-yadhati-a63727331/" className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/subbu_yadhati/" className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                <Code size={24} />
              </a>
            </div>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
            } rounded-xl p-6 border`}>
            <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Send me a message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${isDarkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
              ></textarea>
              <button
                onClick={() => alert('Message sent! (Demo only)')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'education':
        return <EducationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      <NavBar />
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;