import styled from "styled-components";

export const CertificatesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CertificatesContainer = styled.div`
  display: flex;
  // flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CertificateItem = styled.div`
  width: 200px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CertificateTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 5px;
`;

export const CertificateDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const DownloadLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


