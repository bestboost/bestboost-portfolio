import styled from "styled-components";

export const ContactsSection = styled.div`
  flex: 1;
  padding: 32px 160px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: start;
  margin: 0;
  max-width: 600px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 0px 8px ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
`;
