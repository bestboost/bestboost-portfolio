import React from "react";
import { FooterContainer, FooterText } from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        &copy; {currentYear} Ваше ім'я. Всі права захищені.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;