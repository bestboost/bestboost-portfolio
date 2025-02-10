import React from "react";
import ResumeDownload from "../../components/ResumeDownload";
import text from "../../locales/texts";
import {
  ResumeSection,
  Title,
  SecondaryTitle,
  BackgroundCard,
  Description,
} from "./Resume.styled";

const Resume = () => {
  const sections = [
    "summary",
    "techSkills",
    "softSkills",
    "education",
    "projectExperience",
    "workExperience",
    "languages",
  ];
  return (
    <ResumeSection id="resume">
      <Title>Resume</Title>
      <BackgroundCard>
        <SecondaryTitle>{text.professin}</SecondaryTitle>
        <ResumeDownload />
        {sections.map((section, index) => (
          <Description key={index}>
            {section.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}:{" "}
            {text[section]}
          </Description>
        ))}
      </BackgroundCard>
    </ResumeSection>
  );
};

export default Resume;
