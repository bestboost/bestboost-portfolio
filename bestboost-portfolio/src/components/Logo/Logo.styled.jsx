import styled from "styled-components";

export const LogoStyle = styled.p`
  margin: 0;
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 900;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
