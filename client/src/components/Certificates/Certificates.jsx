import React, { useState, useEffect } from "react";
import axios from "axios";
import PdfThumbnail from "./PdfThumbnail";
import {
  CertificatesTitle,
  CertificatesContainer,
  CertificateItem,
  CertificateTitle,
  DownloadLink,
  CertificateImage,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./Certificates.styled";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/certificates/list"
      );
      setCertificates(response.data);
    } catch (error) {
      console.error("Помилка при отриманні сертифікатів:", error);
    }
  };

  return (
    <>
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificatesContainer>
        {(certificates || []).map((cert) => (
          <CertificateItem key={cert._id}>
            {cert.contentType?.startsWith("image") ? (
              <CertificateImage
                src={`http://localhost:5000/api/certificates/download/${cert._id}`}
                alt="Сертифікат"
                onClick={() => setSelectedCertificate(cert)}
              />
            ) : (
              <PdfThumbnail
                url={`http://localhost:5000/api/certificates/download/${cert._id}`}
                alt="Сертифікат"
                onClick={() => setSelectedCertificate(cert)}
              />
            )}
            <CertificateTitle>{cert.filename}</CertificateTitle>
            <DownloadLink
              href={`http://localhost:5000/api/certificates/download/${cert._id}`}
              download
            >
              Download
            </DownloadLink>
          </CertificateItem>
        ))}
      </CertificatesContainer>

      {selectedCertificate && (
        <ModalOverlay onClick={() => setSelectedCertificate(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedCertificate(null)}>
              ✖
            </CloseButton>
            {selectedCertificate &&
            selectedCertificate.contentType?.startsWith("image/") ? (
              <img
                src={`http://localhost:5000/api/certificates/download/${selectedCertificate._id}`}
                alt="Сертифікат"
                style={{ width: "100%" }}
              />
            ) : (
              <iframe
                src={`http://localhost:5000/api/certificates/download/${selectedCertificate._id}`}
                width="100%"
                height="500px"
              />
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Certificates;
