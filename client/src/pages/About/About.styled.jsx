import styled from "styled-components";

export const AboutSection = styled.div`
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

export const PhotoContainer = styled.div`
  float: left;
  width: 33%;
  min-height: 300px;
  position: relative;
  margin: 0 20px 20px 0;
  border-radius: 8px;
  overflow: hidden;
  display: flex; /* Додаємо flex-контейнер */
  align-items: center; /* Вирівнювання по вертикалі */
  justify-content: center; /* Вирівнювання по горизонталі */
   box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const PhotoPlaceholder = styled.div`  
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(200, 200, 200, 0.5);
  color: #aaa;
  font-size: 16px;
  text-align: center;
    display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Photo = styled.img` 
  max-width: 100%; /* Зображення не виходить за межі контейнера */
  max-height: 100%;
  object-fit: cover; 
  border-radius: 8px;
  position: relative;
  z-index: 0;
  `;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
`;
