import { useState, useEffect } from "react";
import axios from "axios";
import ModalCertificates from "./ModalCertificates";
import CertificateList from "./CertificatesList";
import {CertificatesContainer,
  CertificatesTitle,
} from "./Certificates.styled";

const API_URL = process.env.REACT_APP_API_URL;

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(
      `${API_URL}/api/certificates/download/:id`
      );
      setSelectedCertificate(response.data);
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  const openModal = (modalUrl) => {
    setSelectedCertificate(modalUrl);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <CertificatesContainer>
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificateList setSelectedCertificate={setSelectedCertificate}/>
      {
        selectedCertificate && (
          <ModalCertificates
            onClick={() => setSelectedCertificate(null)}
            src={`${API_URL}/api/certificates/download/${selectedCertificate._id}`}
            isOpen={openModal}
            onClose={closeModal}
            modalUrl={selectedCertificate}
          />
        )
      }
    </CertificatesContainer>
  );
};

export default Certificates;
