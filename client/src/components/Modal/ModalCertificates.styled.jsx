import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); // Темний фон
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 0; // Відсутність внутрішніх відступів
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%; // Задаємо ширину в 90% від екрану
  height: 90%; // Задаємо висоту в 90% від екрану
  max-width: 100%; // Максимальна ширина 100%
  max-height: 100%; // Максимальна висота 100%
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Забороняємо прокручування

  // Для того, щоб контент повністю заповнював модалку
  img,
  iframe,
  video {
    object-fit: cover; // Заповнює весь простір без спотворення пропорцій
    width: 100%;
    height: 100%;
    display: block; // Важливо для центрування
    margin: auto; // Додатково для забезпечення центрування
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #2a9d8f;
  &:hover {
    color: #ff6f61;
  }
`;
