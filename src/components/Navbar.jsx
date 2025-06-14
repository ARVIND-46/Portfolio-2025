import React, { useState, useEffect, useRef } from 'react';
import '../components/styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#Home" onClick={closeMenu}>Home</a></li>
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Project" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Achievements" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
