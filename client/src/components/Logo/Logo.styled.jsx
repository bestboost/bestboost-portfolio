import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none; /* Прибираємо підкреслювання */
`;

export const LogoStyle = styled.div`
  margin: 0;
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 900;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
