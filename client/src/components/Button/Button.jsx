import React from "react";
import { StyledButton, SpinnerWrapper } from "./Button.styled";
import Loader from "../Loader/Loader";

const Button = ({ children, onClick, isLoading, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={isLoading} {...props}>
      {isLoading && (
        <SpinnerWrapper>
          <Loader width="16px" height="16px" />
        </SpinnerWrapper>
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
