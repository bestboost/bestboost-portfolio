import React from "react";
import { SpinnerWrapper, Spinner } from "./Loader.styled";

const Loader = ({ width, height }) => {
  return (
    <SpinnerWrapper>
      <Spinner width={width} height={height} />
    </SpinnerWrapper>
  );
};

export default Loader;
