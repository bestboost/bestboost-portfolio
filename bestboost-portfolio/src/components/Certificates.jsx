import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div>
        <h3>Сертифікат 1</h3>
        <p>Опис сертифікату 1.</p>
        <a href="/path/to/certificate1.pdf" download>Download Certificate</a>
      </div>
      <div>
        <h3>Сертифікат 2</h3>
        <p>Опис сертифікату 2.</p>
        <a href="/path/to/certificate2.pdf" download>Download Certificate</a>
      </div>
      {/* Додайте інші сертифікати тут */}
    </section>
  );
};

export default Certificates;
