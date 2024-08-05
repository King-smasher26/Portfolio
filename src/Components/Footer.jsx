import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { darkTheme } from './theme';

const FooterContainer = styled.footer`
  background-color: ${darkTheme.surface};
  color: ${darkTheme.onSurface};
  padding: 2rem 0;
  margin-top: 0; // Changed from 2rem to 0
  border-top: none; // Ensure no border at the top
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${darkTheme.primary};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${darkTheme.secondary};
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${darkTheme.primary};
  color: ${darkTheme.background};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${darkTheme.secondary};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${darkTheme.onSurface}99;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Let's connect and create something amazing together!</FooterText>
        <SocialLinks>
          <SocialLink href="https://github.com/King-smasher26" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/aman-bisht-1455b0245/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:yoab100203@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <ResumeButton href="/resume.pdf" download="resume-amanbisht.pdf">
          <FaFileDownload /> Download Resume
        </ResumeButton>
        <Copyright>© {new Date().getFullYear()} Aman Bisht. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;