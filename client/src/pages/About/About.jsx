import { useState } from "react";
import { motion } from "framer-motion"; // Імпортуємо framer-motion
import Certificates from "../../components/Certificates/Certificates";
import myPhoto from "../../assets/images/myPhoto.webp";
import {
  AboutSection,
  Title,
  BackgroundCard,
  AboutContainer,
  Description,
  PhotoContainer,
  Photo,
  PhotoPlaceholder,
} from "./About.styled";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Анімаційні варіанти для заголовка, тексту та зображення
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <AboutSection id="about">
      {/* Анімація для заголовка */}
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <Title>About Me</Title>
      </motion.div>

      <BackgroundCard>
        <AboutContainer>
          <PhotoContainer>
            {isLoading && <PhotoPlaceholder>Фото не доступне</PhotoPlaceholder>}
            <Photo
              src={myPhoto}
              alt="Фото Дар'ї Гудзовськї"
              onLoad={(e) => {
                setIsLoading(false);
                e.target.style.opacity = 1;
              }}
              style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
            />
          </PhotoContainer>

          {/* Анімація для тексту */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Description>
              Привіт! Мене звати Дар'я, і я — Frontend/Full-Stack розробниця,
              яка вірить у силу технологій змінювати світ на краще. Ця професія
              приваблює мене можливістю реалізовувати ідеї, перетворюючи код у
              корисні та креативні рішення, які знаходять відгук у користувачів
              і покращують їхній досвід. Я обрала цей напрямок через його
              безмежні можливості та виклики. Моєю метою є створювати рішення,
              які поєднують інноваційність, зручність, безпеку та стратегічний
              підхід. Мене захоплює як сам процес написання коду, так і
              результат, що може бути водночас практичним і творчим. Мої
              професійні навички підкріплюються унікальним творчим досвідом. За
              освітою я хореограф, і цей бекграунд додає креативності у мої
              рішення. Окрім того, великий досвід роботи тренером допомагає мені
              ефективно взаємодіяти з командами. Для мене ідеальна команда — це
              об’єднані однією метою люди, які діють у дусі «один за всіх, і всі
              за одного». Моя мрія — створити продукт, яким будуть користуватися
              мільйони людей. Це буде просте у використанні, естетично гарне
              рішення, що приносить користь суспільству та стабільний дохід.
            </Description>
          </motion.div>
        </AboutContainer>
        <Certificates />
      </BackgroundCard>
    </AboutSection>
  );
};

export default About;
