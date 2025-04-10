import styled from "styled-components";

export const AboutSection = styled.main`
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

export const BackgroundCard = styled.div`
  display: inline-block; /* Це допоможе контейнеру мати ширину лише навколо тексту */
  background-color: ${({ theme }) => theme.colors.secondBackground};
  padding: 40px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

export const Photo = styled.img`
  float: left;
  width: 33%;
  height: auto;
  margin: 0 20px 20px 0;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const PhotoPlaceholder = styled.div`
  float: left;
  width: 130px;
  height: 180px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
  margin: 0 20px 20px 0;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
`;
