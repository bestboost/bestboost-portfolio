import { useState, useEffect } from "react";
import axios from "axios";
import { CertificatesContainer, CertificateItem, CertificateTitle, CertificateImage, PlaceholderItem } from "./CertificatesList.styled";

const API_URL = process.env.REACT_APP_API_URL;

const CertificateList = ({ onSelect }) => {
  const [thumbnails, setThumbnails] = useState([]);
  const PLACEHOLDER_COUNT = 2; // Кількість плейсхолдерів

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/certificates/list-thumbnails`);
      setThumbnails(response.data);
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  // Додаємо плейсхолдери, якщо сертифікатів мало
  const placeholders = Array.from({ length: Math.max(PLACEHOLDER_COUNT - thumbnails.length, 0) });

  return (
    <CertificatesContainer>
      {thumbnails.map((thumb) => (
        <CertificateItem key={thumb._id} onClick={() => onSelect(thumb.filename)}>
          <CertificateImage src={thumb.imageUrl} alt="Сертифікат" loading="lazy" />
          <CertificateTitle>{thumb.filename}</CertificateTitle>
        </CertificateItem>
      ))}

      {placeholders.map((_, index) => (
        <PlaceholderItem key={`placeholder-${index}`} />
      ))}
    </CertificatesContainer>
  );
};

export default CertificateList;
