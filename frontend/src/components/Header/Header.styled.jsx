import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  background: linear-gradient(to right, #555555, #666666, #ff6f61, #ffc107);
`;
