import React from "react";
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
      <Contact>Email: your_email@example.com</Contact>
      <Contact>
        <ContactLink
          href="https://github.com/ваш_репозиторій"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ContactLink>
      </Contact>
    </ContactsSection>
  );
};

export default Contacts;
