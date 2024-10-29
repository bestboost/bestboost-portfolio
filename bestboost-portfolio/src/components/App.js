import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import Logo from "../components/Logo";
// import Navbar from "../components/Navbar";
import About from "../pages/About/About";
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Contacts from './components/Contacts';
// import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      {/* <Logo />
      <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Projects />
      <Resume />
      <Contacts />  */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default App;
