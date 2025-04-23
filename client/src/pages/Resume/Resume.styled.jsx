import styled from "styled-components";

export const ResumeSection = styled.div`
  flex: 1;
  padding: 32px 160px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const BackgroundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  span {
    display: inline-block;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  text-align: start;
  line-height: 1.5;
  margin: 0;
  padding: ${({ theme }) =>
    `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`};
`;
