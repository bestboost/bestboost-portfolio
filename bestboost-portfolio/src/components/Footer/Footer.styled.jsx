import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;
