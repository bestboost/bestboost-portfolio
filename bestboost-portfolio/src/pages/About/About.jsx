import React from "react";
import Certificates from "../../components/Certificates/Certificates";
import { AboutSection, Title, Description } from "./About.styled";

const About = () => {
  return (
    <>
      <AboutSection id="about">
        <Title>About Me</Title>
        <Description>Короткий опис про себе.</Description>
      </AboutSection>
      <Certificates />
    </>
  );
};

export default About;
