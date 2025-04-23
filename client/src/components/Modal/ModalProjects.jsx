import { useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  SecondaryTitle,
  Description,
  CloseButton,
} from "./ModalProjects.styled";

const Modal = ({ modalData, onClose, isOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <SecondaryTitle>{modalData.title}</SecondaryTitle>
        <Description>{modalData.description}</Description>
        <Description>Роль: {modalData.role}</Description>
        <Description>Tech Stack: {modalData.techStack.join(", ")}</Description>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
