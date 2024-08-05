import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from '../CustomHooks/useInView';
import { darkTheme } from './theme';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${darkTheme.background};
  color: ${darkTheme.onBackground};
`;

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: ${darkTheme.primary};
`;

// const ProjectsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
  
//   @media (max-width: 1250px) {
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   }

//   @media (max-width: 1050px) {
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   }
// `;

// const ProjectCard = styled(motion.div)`
//   background-color: ${darkTheme.surface};
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${darkTheme.surface};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: calc(25% - 1.5rem); // 25% width for 4 cards per row, minus some space for gaps
  min-width: 280px; // Minimum width to prevent cards from becoming too narrow
  margin-bottom: 2rem; // Add bottom margin to ensure space between rows

  @media (max-width: 1200px) {
    width: calc(33.333% - 1.5rem); // 3 cards per row on smaller screens
  }

  @media (max-width: 900px) {
    width: calc(50% - 1rem); // 2 cards per row on even smaller screens
  }

  @media (max-width: 600px) {
    width: 100%; // 1 card per row on mobile
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${darkTheme.secondary};
  height: 3.6em; // Set a fixed height for the title
  display: flex;
  align-items: center;
  justify-content:center;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${darkTheme.onSurface};
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; // Limit to 4 lines
  -webkit-box-orient: vertical;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${darkTheme.primary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${darkTheme.secondary};
  }
`;

const Projects = () => {
  const [ref, isInView] = useInView(0.1);

  const projects = [
    {
      title: "E-commerce Website with inventory analysis",
      description: "A full-stack e-commerce platform built with MERN. Features include user authentication using JWT, product catalog, shopping cart, and payment gateway using razorpay dummy api. It also includes inventory analysis and representation of it in a graphical way.",
      github: "https://github.com/King-smasher26/Shopper",
    },
    {
      title: "News Website",
      description: "A responsive News Website using a public api. Includes features like real-time updates, News categorization, and favorites storage (locally).",
      github: "https://github.com/King-smasher26/NewsWebsite",
      live: "https://news-website-psi-woad.vercel.app/",
    },
    {
        title: "Anime Blog - AnimeWhisperer",
        description: "An anime blogging website made using Astro (a content driven web framework). It has all the best SEO practices and amazing performance.",
        live: "https://www.animewhisperer.me/",
    },
    {
        title: "FindEmp",
        description: "A landing page aimed at providing a seamless hiring experience for multiple MNCs.",
        github: "https://github.com/King-smasher26/FindEmp",
        live: "https://findemp.netlify.app/",
    },
];

return (
    <ProjectsSection ref={ref}>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.github && (
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </ProjectLink>
              )}
              {project.live && (
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;