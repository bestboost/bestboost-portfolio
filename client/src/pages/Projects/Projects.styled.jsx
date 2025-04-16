import styled from "styled-components";

export const ProjectsSection = styled.div`
  flex: 1;
  min-height: 80vh;
  padding: 32px 160px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 1024px) {
    padding: 32px 80px;
  }

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const SecondaryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

export const ProjectCard = styled.div`
 overflow: hidden; /* Гарантує, що вміст не виходить за межі */
  position: relative
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding-top: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: ${({ theme }) => theme.transitions.hover};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  max-height: 4rem; /* Відображає лише три рядки тексту */
  overflow: hidden;
  transition: max-height 0.3s ease, background-color 0.3s ease;
  background-color: rgba(64, 224, 208, 0.2); /* Прозорий бірюзовий фон */

  &:hover {
    max-height: none; /* Показує повний текст при наведенні */
    cursor: pointer;
    background-color: rgba(
      64,
      224,
      208,
      0.5
    ); /* Робить фон більш насиченим при наведенні */
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem; /* Зменшено розмір шрифту */
  line-height: 1.6; /* Зменшено відстань між рядками */
  margin: 5px 0; /* Зменшено відступи */
`;

export const ProjectLink = styled.a`
  display: block;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.link};
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 0px 8px ${({ theme }) => theme.colors.secondary};
  }
`;
