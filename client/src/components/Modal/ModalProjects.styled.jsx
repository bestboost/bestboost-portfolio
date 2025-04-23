import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display; flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: inset 0px 8px 24px rgba(51, 181, 168, 0.5),
              0px 4px 12px rgba(0, 0, 0, 0.4); 
  width: 80%;
  max-width: 600px;
  position: relative;
`;
export const SecondaryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
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
