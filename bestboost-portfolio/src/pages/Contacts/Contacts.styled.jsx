import styled from "styled-components";

export const ContactsSection = styled.main`
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Contact = styled.p`
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: start;
  margin: 0;
  max-width: 600px;
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
