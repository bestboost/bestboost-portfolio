import React from "react";
import certificates from "../../data/certificates"; // Імпортуємо дані сертифікатів
import {
  CertificatesSection,
  CertificatesTitle,
  CertificatesContainer,
  CertificateItem,
  CertificateTitle,
  CertificateDescription,
  DownloadLink,
} from "./Certificates.styled";

const Certificates = () => {
  return (
    <CertificatesSection id="certificates">
      <CertificatesTitle>Certificates</CertificatesTitle>
      <CertificatesContainer>
        {certificates.map((cert) => (
          <CertificateItem key={cert.id}>
            <CertificateTitle>{cert.title}</CertificateTitle>
            <CertificateDescription>{cert.description}</CertificateDescription>
            <DownloadLink href={cert.link} download>
              Download Certificate
            </DownloadLink>
          </CertificateItem>
        ))}
      </CertificatesContainer>
    </CertificatesSection>
  );
};

export default Certificates;
