import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Contacts from "../pages/Contacts/Contacts";
import Footer from "../components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Logo />}
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};
export default App;
