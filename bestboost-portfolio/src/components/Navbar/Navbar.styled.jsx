import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.2rem;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;
