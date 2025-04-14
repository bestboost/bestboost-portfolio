import styled from "styled-components";

export const CertificatesContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const CertificateItem = styled.div`
  width: 200px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.hover};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
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

export const PlaceholderItem = styled.div`
  width: 150px;
  height: 200px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
  font-style: italic;
`;
