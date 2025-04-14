import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 40px;
  min-width: 120px;

  &:hover {
    background-color: #e63946;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px; /* Відступ між спінером і текстом */
  width: 16px; /* Розмір контейнера для спінера */
  height: 16px;
  overflow: hidden; /* Додаємо обмеження */
`;
