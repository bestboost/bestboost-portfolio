import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const Spinner = styled.div`
  border: 4px solid #a9a9a9;
  border-top: 8px solid #ff6f61; 
  border-radius: 50%;
  width: ${({ width }) => width || "50px"};
  height: ${({ height }) => height || "50px"};
  animation: ${spin} 1s linear infinite;
`;
