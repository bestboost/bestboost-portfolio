import React from "react";
import { FaFilePdf } from "react-icons/fa";
import Button from "../../components/Button/Button";
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
        <Button
          onClick={() => {
            window.location.href =
              "https://drive.google.com/uc?export=download&id=1Z8NxsCSvzEeMn96olngL48F9WBDosTyA";
          }}
        >
          <FaFilePdf style={{ marginRight: "8px" }} /> Download Resume
        </Button>
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
