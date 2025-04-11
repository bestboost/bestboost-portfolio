import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
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
      <FaGithub />_GitHub
        <ContactLink
          href="https://github.com/bestboost"
          target="_blank"
          rel="noopener noreferrer"
        >
        </ContactLink>
      </Contact>
      <Contact>
      <FaLinkedin />_LinkedIn
        <ContactLink
          href="https://linkedin.com/in/darya-hudzovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </ContactLink>
      </Contact>
      <Contact>
      <FaTelegram />_Telegram
        <ContactLink
          href="https://t.me/DaryaHudzovska"
          target="_blank"
          rel="noopener noreferrer"
        >
        </ContactLink>
      </Contact>
      <FeedbackForm />
    </ContactsSection>
  );
};

export default Contacts;
