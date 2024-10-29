import React from 'react';
import Testimonials from '../../components/Testimonials.jsx'

const Projects = () => {
  return (
    <>
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>Проєкт 1</h3>
        <p>Опис проєкту</p>
        <a href="https://github.com/ваш_репозиторій" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {/* Додайте інші проєкти тут */}
    </section>
    <Testimonials />
    </>
  );
};

export default Projects;
