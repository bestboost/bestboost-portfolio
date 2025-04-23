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
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  cursor: pointer;
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 0px 8px ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
