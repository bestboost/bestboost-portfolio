import { useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./ModalCertificates.styled";

const ModalCertificates = ({ onClick, src, isOpen, onClose, selectedCertificate }) => {
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
    <>
      <ModalOverlay onClick={onClick}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClick}>✖</CloseButton>
          {selectedCertificate &&
          selectedCertificate.contentType?.startsWith("image/") ? (
            <img src={src} alt="Сертифікат" style={{ width: "100%" }} />
          ) : (
            <iframe src={src} width="100%" height="500px" />
          )}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalCertificates;
