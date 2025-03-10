import { useState, useEffect } from "react";
import axios from "axios";
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

const API_URL = process.env.REACT_APP_API_URL;

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])

useEffect(() => { 
  getAllProjects();
}, []);

  const getAllProjects = async () => {
    try{
      const response = await axios.get(`${API_URL}/api/projects`);
      setProjectsData(response.data)
    } catch(error){
      console.error("Помилка при отриманні проектів:", error);
    }
  }

  return (
    <>
      <ProjectsSection>
        <Title>Projects</Title>
        <ProjectsContainer>
          {(projectsData || []).map((project) => (
            <ProjectCard key={project._id}>
              <ProjectImg
                src={project.image}
                alt={`${project.title} screenshot`}
              />
              <SecondaryTitle>{project.title}</SecondaryTitle>
              {project.liveLink && (
                <ProjectLink
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </ProjectLink>
              )}
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
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsSection>
      {/* <Testimonials /> */}
    </>
  );
};

export default Projects;
