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
    hover: "rgba(42, 157, 143, 0.2)", // для hover
  },
  fonts: {
    main: "'Poppins', sans-serif", // Для основного тексту (сучасний і легкий для читання)
    heading: "'Montserrat', sans-serif", // Для заголовків (професійний і чіткий вигляд)
  },
  spacing: (factor) => `${8 * factor}px`, // Відступи (8px базові)
  shadows: {
    default: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)",
    hover: "0px 6px 12px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.08)",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};

export default theme;
