import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Tagline } from "./Home.styled";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <Wrapper onClick={handleNavigation}>
      <Title>BestBoost</Title>
      <Tagline>Transform Reality</Tagline>
    </Wrapper>
  );
};

export default Home;
