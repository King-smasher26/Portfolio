import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darkTheme } from './theme';

const NavbarContainer = styled.nav`
  background-color: ${darkTheme.surface};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  color: ${darkTheme.primary};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: ${darkTheme.onSurface};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${darkTheme.secondary};
  }

  &.active {
    color: ${darkTheme.primary};
  }
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <NavContent>
        <Logo href="#intro" onClick={() => scrollToSection('intro')}>Aman Bisht</Logo>
        <NavLinks>
          <NavLink 
            href="#intro" 
            onClick={() => scrollToSection('intro')}
            className={activeSection === 'intro' ? 'active' : ''}
          >
            Intro
          </NavLink>
          <NavLink 
            href="#skills" 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </NavLink>
          <NavLink 
            href="#projects" 
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;