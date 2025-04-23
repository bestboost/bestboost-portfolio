import styled from "styled-components";

export const CertificatesContainer = styled.div`
  gap: 20px;
  justify-content: center;
`;

export const CertificatesTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
