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

  // useEffect(() => {
  //   fetchCertificates();
  // }, []);

  const openModal = async() => {
    try {
      const response = await axios.get(
      `${API_URL}/api/certificates/download/${selectedCertificate._id}`
      );
      setSelectedCertificate(response.data);
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <CertificatesContainer onClick={() => openModal()}>
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificateList setSelectedCertificate={setSelectedCertificate}/>
      {
        selectedCertificate && (
          <ModalCertificates
            onClick={() => setSelectedCertificate(null)}
            src={`${API_URL}/api/certificates/download/${selectedCertificate._id}`}
            onClose={closeModal}
            modalUrl={selectedCertificate}
          />
        )
      }
    </CertificatesContainer>
  );
};

export default Certificates;
