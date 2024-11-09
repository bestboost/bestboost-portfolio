import styled from "styled-components";

export const ResumeSection = styled.main`
  padding: ${({ theme }) => theme.spacing(4)};
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

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  text-align: start;
  line-height: 1.5;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 600px;
`;

// export const ProjectLink = styled.a`
//   color: ${({ theme }) => theme.colors.link};
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;
