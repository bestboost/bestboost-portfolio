import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const word = text.professin;
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveIndex(index);
      index++;

      if (index > word.length) {
        clearInterval(interval); // 🔒 Зупиняємо, коли все пройшлось
      }
    }, 10);

    return () => clearInterval(interval);
  }, [word.length]);

  return (
    <ResumeSection id="resume">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Title>Resume</Title>
      </motion.div>

      <BackgroundCard>
        <SecondaryTitle>
          {word.split("").map((char, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.span
                key={index}
                animate={{
                  color: isActive ? "#FFC107" : "#2A9D8F",
                  textShadow: isActive
                    ? "0 0 6px #FFC107, 0 0 8px #FFD54F"
                    : "0 0 0 transparent",
                }}
                transition={{ duration: 0.3 }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
        </SecondaryTitle>

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
