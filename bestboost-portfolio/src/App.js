import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #61dafb;
`;

const App = () => (
  <Wrapper>
    <Title>BestBoost</Title>
    <Tagline>Transform Reality</Tagline>
  </Wrapper>
);

export default App;
