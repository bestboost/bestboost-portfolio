import styled from "styled-components";

export const ProjectsSection = styled.main`
  flex: 1;
  padding: 32px 160px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const SecondaryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.default};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 600px;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
