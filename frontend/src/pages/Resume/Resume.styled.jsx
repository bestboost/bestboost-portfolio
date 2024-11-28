import styled from "styled-components";

export const ResumeSection = styled.main`
  flex: 1;
  padding: 32px 160px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const BackgroundCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding: 40px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.default};
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
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)};
`;

// export const ProjectLink = styled.a`
//   color: ${({ theme }) => theme.colors.link};
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;
