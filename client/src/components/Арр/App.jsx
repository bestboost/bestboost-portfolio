import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./App.styled";
import Loader from "../Loader/Loader";
import  Toast  from "../ToastContainer/ToastContainer";


// Лейзі-імпорт сторінок
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Projects = lazy(() => import("../../pages/Projects/Projects"));
const Resume = lazy(() => import("../../pages/Resume/Resume"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

const App = () => {
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" && <Header />}
      
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
      <Toast />

      {location.pathname !== "/" && <Footer />}
    </Container>
  );
};

export default App;
