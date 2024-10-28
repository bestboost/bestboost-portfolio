import React from 'react';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Contacts from './components/Contacts';
// import Certificates from './components/Certificates';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
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
    {/* <Navbar />
    <About />
    <Projects />
    <Resume />
    <Contacts />
    <Certificates />
    <Testimonials />
    <Footer /> */}
    </Wrapper>

);

export default App;
