import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Tagline = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #61dafb;
  opacity: 0.9;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
  }
`;
