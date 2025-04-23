import { useState, useEffect } from "react";
import axios from "axios";
import ModalCertificates from "../Modal//ModalCertificates";
import CertificateList from "./CertificatesList";
import { CertificatesTitle } from "./Certificates.styled";

const API_URL = process.env.REACT_APP_API_URL;

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    fetchOriginalCertificates();
  }, []);

  const fetchOriginalCertificates = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/certificates/list-originals`
      );
      setCertificates(response.data);
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  const openModal = (filename) => {
    // Функція для очищення назви файлу (видаляє розширення)
    const cleanFilename = (filename) =>
      filename
        .replace(/\.[^/.]+$/, "")
        .trim()
        .toLowerCase();

    const certificate = certificates.find(
      (cert) => cleanFilename(cert.filename) === cleanFilename(filename)
    );
    if (!certificate) {
      console.error("Помилка: не знайдено оригінал сертифіката для:", filename);
      return;
    }
    console.log("Відкриття модалки для сертифіката:", certificate);
    setSelectedCertificate(certificate); // Встановлюємо об'єкт сертифіката
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificateList onSelect={openModal} />
      {selectedCertificate && (
        <ModalCertificates
          isOpen={!!selectedCertificate}
          src={selectedCertificate.fileUrl} // Використовуємо fileUrl замість ручного складання URL
          onClose={closeModal}
          onClick={closeModal}
          selectedCertificate={selectedCertificate}
        />
      )}
    </>
  );
};

export default Certificates;
