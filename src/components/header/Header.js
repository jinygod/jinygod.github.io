import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = window.pageYOffset;
      if (topOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isSticky ? 'header sticky' : 'header'}>
      <a href="#" className="header-left">jsj.dev</a>
      <nav>
        <ul className="header-ul">
          <li><a href="#about" onClick={(event) => handleNavLinkClick(event, 'about')}>About</a></li>
          <li><a href="#projects" onClick={(event) => handleNavLinkClick(event, 'projects')}>Projects</a></li>
          <li><a href="#skills" onClick={(event) => handleNavLinkClick(event, 'skills')}>Skills</a></li>
          <li><a href="#experience" onClick={(event) => handleNavLinkClick(event, 'experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(event) => handleNavLinkClick(event, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
