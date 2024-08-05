import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { darkTheme } from './theme';

const IntroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${darkTheme.background};
  color: ${darkTheme.onBackground};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
`;

const Avatar = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid ${darkTheme.primary};
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${darkTheme.primary};
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${darkTheme.secondary};
`;

const Bio = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  color: ${darkTheme.onSurface};
`;

const Intro = () => {
  return (
    <IntroSection>
      <ContentWrapper>
        <Avatar
          src="/images/avatar-portfolio.jpg"
          alt="Your Name"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your Name
        </Name>
        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Web Developer | Designer | Tech Enthusiast
        </Tagline>
        <Bio
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Hello! I'm a passionate web developer with a keen eye for design and a love for creating
          intuitive user experiences. With expertise in MERN stack, and various other
          technologies, I strive to build elegant and efficient solutions to complex problems.
          When I'm not coding, I like to play football and videogames.
        </Bio>
      </ContentWrapper>
    </IntroSection>
  );
};

export default Intro;