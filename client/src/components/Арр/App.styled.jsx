import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  word-wrap: break-word; /* Для розбиття довгих слів */
  white-space: normal; /* Щоб текст не збирався в одну лінію */
`;

export const MainContent = styled.main`
  flex: 1;
    display: flex;
  flex-direction: column;
  min-height: 100%;  /* Переконатися, що це заповнює весь простір */
`;