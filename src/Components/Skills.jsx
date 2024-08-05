import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaJenkins, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiTypescript, SiExpress, SiCentos } from 'react-icons/si';
import { useInView } from '../CustomHooks/useInView';
import { darkTheme } from './theme';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${darkTheme.background};
  color: ${darkTheme.onBackground};
`;

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: ${darkTheme.primary};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  color: ${darkTheme.onSurface};
`;

const SkillName = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${darkTheme.onSurface};
`;

const Skills = () => {
    const [ref, isInView] = useInView(0.1);

    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="#000000" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'Git', icon: <FaGit color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="#181717" /> },
        { name: 'CentOS', icon: <SiCentos color="#262577" /> },
        { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
        { name: 'Jenkins', icon: <FaJenkins color="#D24939" /> },
    ];

    return (
        <SkillsSection ref={ref}>
            <Title
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                My Skills
            </Title>
            <SkillsContainer>
                {skills.map((skill, index) => (
                    <SkillItem
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {skill.icon}
                        <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                ))}
            </SkillsContainer>
        </SkillsSection>
    );
};

export default Skills;