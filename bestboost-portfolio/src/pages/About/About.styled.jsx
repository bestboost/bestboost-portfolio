import styled from "styled-components";

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  height: 100vh;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 600px; /* Обмежує ширину тексту */
`;
