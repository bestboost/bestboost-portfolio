import PdfThumbnail from "./PdfThumbnail";
import {  CertificatesContainer,
    CertificateItem,
    CertificateTitle,
    CertificateImage,} from "./ CertificatesList.styled";

const CertificateList = ({certificates, setSelectedCertificate}) => {
    const API_URL = process.env.REACT_APP_API_URL;

    return (
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
          </CertificateItem>
        ))}
      </CertificatesContainer>
    )
}

export default CertificateList;