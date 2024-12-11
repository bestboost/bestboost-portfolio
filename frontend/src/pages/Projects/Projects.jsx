import React from "react";
import projectsData from "../../data/projects";
// import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import {
  ProjectsSection,
  ProjectsContainer,
  Description,
  Title,
  SecondaryTitle,
  ProjectCard,
  ProjectImg,
  ProjectLink,
} from "./Projects.styled.jsx";

const Projects = () => {
  return (
    <>
      <ProjectsSection id="projects">
        <Title>Projects</Title>
        <ProjectsContainer>
          {projectsData.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImg
                src={project.image}
                alt={`${project.title} screenshot`}
              />
              <SecondaryTitle>{project.title}</SecondaryTitle>
              <Description>{project.description}</Description>
              <Description>
                Tech Stack: {project.techStack.join(", ")}
              </Description>
              <ProjectLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </ProjectLink>
              {project.liveLink && (
                <ProjectLink
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </ProjectLink>
              )}
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsSection>
      {/* <Testimonials /> */}
    </>
  );
};

export default Projects;
