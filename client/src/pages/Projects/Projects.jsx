import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Modal/ModalProjects.jsx";
// import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Loader from "../../components/Loader/Loader";
import {
  ProjectsSection,
  ProjectsContainer,
  DescriptionWrapper,
  Description,
  Title,
  SecondaryTitle,
  ProjectCard,
  ImgBox,
  ProjectImg,
  ProjectLink,
} from "./Projects.styled.jsx";

const API_URL = process.env.REACT_APP_API_URL;

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/projects`);
      setProjectsData(response.data);
    } catch (error) {
      console.error("Помилка при отриманні проектів:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <ProjectsSection>
        <Title>Projects</Title>
        {loading ? (
          <Loader />
        ) : (
          <ProjectsContainer>
            {(projectsData || []).map((project) => (
              <ProjectCard key={project._id}>
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
                <ImgBox>
                  <ProjectImg
                    src={project.image}
                    alt={`${project.title} screenshot`}
                  />
                </ImgBox>
                <ProjectLink
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </ProjectLink>
                <DescriptionWrapper onClick={() => openModal(project)}>
                  <Description>{project.description}</Description>
                  <Description>Роль: {project.role}</Description>
                  <Description>
                    Tech Stack: {project.techStack.join(", ")}
                  </Description>
                </DescriptionWrapper>
              </ProjectCard>
            ))}
          </ProjectsContainer>
        )}
      </ProjectsSection>
      {/* <Testimonials /> */}
      {modalData && (
        <Modal
          onClose={closeModal}
          isOpen={!!modalData}
          modalData={modalData}
        ></Modal>
      )}
    </>
  );
};

export default Projects;
