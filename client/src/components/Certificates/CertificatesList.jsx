import { useState, useEffect } from "react";
import axios from "axios";
import {CertificatesContainer, CertificateItem, CertificateTitle, CertificateImage } from "./CertificatesList.styled";

const API_URL = process.env.REACT_APP_API_URL;

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/certificates/list`);
      setCertificates(response.data); // Перевірте, чи є `imageUrl` у відповідях
      console.log(response.data)
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  return (
    <CertificatesContainer>
      {(certificates || []).map((cert) => (
        <CertificateItem key={cert._id}>
          <CertificateImage
            src={cert.imageUrl} // Використовуємо URL зображення
            alt="Сертифікат"
            loading="lazy"
          />
          <CertificateTitle>{cert.filename}</CertificateTitle>
        </CertificateItem>
      ))}
    </CertificatesContainer>
  );
};

export default CertificateList;
