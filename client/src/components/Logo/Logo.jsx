import React from "react";
import { StyledLink, LogoStyle } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLink to="/about">
      <LogoStyle>BestBoost</LogoStyle>
    </StyledLink>
  );
};

export default Logo;
