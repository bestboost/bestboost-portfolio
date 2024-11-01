import styled from "styled-components";

export const CertificatesSection = styled.section`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const CertificatesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CertificatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CertificateItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`;

export const CertificateTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const CertificateDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

export const DownloadLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
