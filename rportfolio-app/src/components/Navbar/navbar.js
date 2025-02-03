import { useState } from 'react';
import "./navbar.css";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="logo">YourLogo</div>

      <ul className="desktopMenu">
        <li className="desktopMenuItem"><a href="#home">Home</a></li>
        <li className="desktopMenuItem"><a href="#about">About</a></li>
        <li className="desktopMenuItem"><a href="#projects">Projects</a></li>
        <li className="desktopMenuItem"><a href="#skills">Skills</a></li>
        <li className="desktopMenuItem"><a href="#contact">Contact</a></li>
      </ul>

      <button className="desktopMenubtn">
        <a href="/resume.pdf" download>Resume</a>
      </button>

      <div className="iconGroup">
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <FaBars className="mobMenu" onClick={toggleMenu} />
      </div>

      {menuOpen && (
        <div className="navMenu">
          <a href="#home" className="listItem" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="listItem" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="listItem" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className="listItem" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="listItem" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
