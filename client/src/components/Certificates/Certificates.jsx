import React, { useState, useEffect } from "react";
import axios from "axios";
import PdfThumbnail from "./PdfThumbnail";
import ModalCertificates from "./ModalCertificates";
import {
  CertificatesTitle,
  CertificatesContainer,
  CertificateItem,
  CertificateTitle,
  // DownloadLink,
  CertificateImage,
} from "./Certificates.styled";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(
      `${API_URL}/api/certificates/list`
      );
      setCertificates(response.data);
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
    <>
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificatesContainer>
        {(certificates || []).map((cert) => (
          <CertificateItem key={cert._id}>
            {cert.contentType?.startsWith("image") ? (
              <CertificateImage
                src={`${API_URL}/api/certificates/download/${cert._id}`}
                alt="Сертифікат"
                onClick={() => setSelectedCertificate(cert)}
              />
            ) : (
              <PdfThumbnail
                url={`${API_URL}/api/certificates/download/${cert._id}`}
                alt="Сертифікат"
                onClick={() => setSelectedCertificate(cert)}
                loading="lazy" 
              />
            )}
            <CertificateTitle>{cert.filename}</CertificateTitle>
            {/* <DownloadLink
              href={`http://localhost:5000/api/certificates/download/${cert._id}`}
              download
            >
              Download
            </DownloadLink> */}
          </CertificateItem>
        ))}
      </CertificatesContainer>

      {
        selectedCertificate && (
          <ModalCertificates
            onClick={() => setSelectedCertificate(null)}
            src={`${API_URL}/api/certificates/download/${selectedCertificate._id}`}
            isOpen={openModal}
            onClose={closeModal}
            modalUrlUrl={selectedCertificate}
          />
        )
      }
    </>
  );
};

export default Certificates;
