import React from "react";
import { NavbarWrapper, NavList, NavItem, NavLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacts">Contacts</NavLink>
        </NavItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
