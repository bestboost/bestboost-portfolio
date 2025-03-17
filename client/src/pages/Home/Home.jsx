import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Tagline } from "./Home.styled";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true); // Запускаємо анімацію затухання
      setTimeout(() => navigate("/about"), 1000); // Переходимо після завершення анімації
    }, 3000);

    return () => clearTimeout(timeout); // Очищення таймера при розмонтуванні
  }, [navigate]);

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <Wrapper onClick={handleNavigation} as={motion.div} animate={{ opacity: fadeOut ? 0 : 1 }} transition={{ duration: 1 }}>
      <Title>BestBoost</Title>
      <Tagline>Transform Reality</Tagline>
    </Wrapper>
  );
};

export default Home;
