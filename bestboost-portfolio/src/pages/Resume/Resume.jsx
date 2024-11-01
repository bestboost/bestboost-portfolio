import React from "react";
import { FaFilePdf } from "react-icons/fa";
import {
  ResumeSection,
  Title,
  // SecondaryTitle,
  DownloadBtn,
  Description,
} from "./Resume.styled";

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <Title>Resume</Title>
      <Description>
        Here’s an overview of my skills and experience. You can also download my
        full resume as a PDF. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Omnis asperiores facilis doloremque ullam rerum
        reiciendis, nesciunt repellat quasi, aspernatur architecto doloribus
        harum, temporibus aut non hic in iusto animi est!
      </Description>
      <DownloadBtn href="/resume.pdf" download="CV.pdf">
        <FaFilePdf style={{ marginRight: "8px" }} /> Download Resume
      </DownloadBtn>
    </ResumeSection>
  );
};

export default Resume;
