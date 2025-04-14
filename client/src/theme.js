const theme = {
  colors: {
    primary: "#FF6F61", // Основний колір (теплий червоно-оранжевий — стимулює дію та приваблює)
    secondary: "#2A9D8F", // Додатковий колір (спокійний бірюзовий для збалансованого вигляду)
    background: "#F4F4F4", // Легкий фон (робить контент читабельним)
    secondBackground: "#FAFAFA",
    text: "#2F2F2F", // Темний текст для кращої читабельності
    link: "#264653", // Темний синьо-зелений для посилань (надійність та довіра)
    highlight: "#FFC107", // Виділення (яскравий жовтий для важливих елементів)
    danger: "#E63946", // Помилки або попередження
    hover: "rgba(42, 157, 143, 0.5)", // для hover
  },
  fonts: {
    main: "'Poppins', sans-serif", // Для основного тексту (сучасний і легкий для читання)
    heading: "'Montserrat', sans-serif", // Для заголовків (професійний і чіткий вигляд)
  },
  spacing: (factor) => `${8 * factor}px`, // Відступи (8px базові)
  shadows: {
    default: "0px 6px 12px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1)", // Збільшено розмиття та непрозорість
    hover: "0px 8px 24px rgba(0, 0, 0, 0.3), 0px 4px 12px rgba(0, 0, 0, 0.2)", // Більш помітна тінь для hover
  },
  transitions: {
    hover: "background-color 0.3s ease, box-shadow 0.3s ease", // Додаємо стилі переходу
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};

export default theme;
