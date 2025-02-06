import { useState, useEffect } from 'react';
import "./navbar.css";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars } from 'react-icons/fa';
import Logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth Scroll Function with Offset
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height

    if (section) {
      const sectionTop = section.offsetTop - navbarHeight; // Adjust scroll position
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId); // Set active section when clicked
      setMenuOpen(false);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight + 50) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="desktopMenu">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <li key={section} className={`desktopMenuItem ${activeSection === section ? 'active' : ''}`}>
            <a href={`#${section}`} onClick={(e) => handleScroll(e, section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="desktopMenubtn">
        <a href="/resume.pdf" download>Resume</a>
      </button>

      <div className="iconGroup">
        <a href="https://github.com/rohitbhau" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        <a href="https://www.linkedin.com/in/rohit-kumbhare" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <button className="mobMenu" onClick={toggleMenu}>
          <FaBars size={20} />
        </button>
      </div>

      {menuOpen && (
        <div className="navMenu">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`listItem ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => handleScroll(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
