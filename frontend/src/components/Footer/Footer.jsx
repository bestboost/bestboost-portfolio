import React from "react";
import { FooterContainer, FooterText } from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        &copy; {currentYear} BestBoost від Дар'ї Гудзовської. Всі права
        захищені.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
