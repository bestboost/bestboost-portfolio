import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>&copy; {currentYear} Ваше ім'я. Всі права захищені.</p>
    </footer>
  );
};

export default Footer;
