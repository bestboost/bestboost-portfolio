import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import {
  ContactsSection,
  Title,
  Contact,
  ContactLink,
} from "./Contacts.styled";

const Contacts = () => {
  // Анімаційні варіанти
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };
  return (
    <ContactsSection id="contacts">
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Title>Contacts</Title>
      </motion.div>
      <Contact
        as={motion.div}
        custom={0} // Задаємо індекс для затримки
        initial="hidden"
        animate="visible"
        variants={contactVariants}
      >
        <ContactLink
          href="https://github.com/bestboost"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> _GitHub
        </ContactLink>
      </Contact>
      <Contact
        as={motion.div}
        custom={1} // Задаємо індекс для затримки
        initial="hidden"
        animate="visible"
        variants={contactVariants}
      >
        <ContactLink
          href="https://linkedin.com/in/darya-hudzovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          _LinkedIn
        </ContactLink>
      </Contact>
      <Contact
        as={motion.div}
        custom={2}
        initial="hidden"
        animate="visible"
        variants={contactVariants}
      >
        <ContactLink
          href="https://t.me/DaryaHudzovska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
          _Telegram
        </ContactLink>
      </Contact>

      <FeedbackForm />
    </ContactsSection>
  );
};

export default Contacts;
