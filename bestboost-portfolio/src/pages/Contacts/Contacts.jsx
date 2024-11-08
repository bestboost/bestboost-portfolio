import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import {
  ContactsSection,
  Title,
  Contact,
  ContactLink,
} from "./Contacts.styled";

const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <Title>Contacts</Title>
      <Contact>
        <ContactLink href="mailto:1bestboost@gmail.com">
          <FaEnvelope /> 1bestboost@gmail.com
        </ContactLink>
      </Contact>
      <Contact>
        <ContactLink
          href="https://github.com/bestboost"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </ContactLink>
      </Contact>
      <Contact>
        <ContactLink
          href="https://linkedin.com/in/darya-hudzovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </ContactLink>
      </Contact>
      <Contact>
        <ContactLink
          href="https://t.me/DaryaHudzovska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram /> Telegram
        </ContactLink>
      </Contact>
    </ContactsSection>
  );
};

export default Contacts;
