import { useState, useEffect } from "react";
import axios from "axios";
import {CertificatesContainer, CertificateItem, CertificateTitle, CertificateImage } from "./CertificatesList.styled";

const API_URL = process.env.REACT_APP_API_URL;

const CertificateList = ({onSelect}) => {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/certificates/list-thumbnails`);
      setThumbnails(response.data); // Перевірте, чи є `imageUrl` у відповідях
      console.log(response.data)
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  return (
    <CertificatesContainer>
      {(thumbnails || []).map((thumb) => (
        <CertificateItem key={thumb._id} onClick={() => onSelect(thumb.filename)}>
          <CertificateImage
            src={thumb.imageUrl} // Використовуємо URL зображення
            alt="Сертифікат"
            loading="lazy"
          />
          <CertificateTitle>{thumb.filename}</CertificateTitle>
        </CertificateItem>
      ))}
    </CertificatesContainer>
  );
};

export default CertificateList;
