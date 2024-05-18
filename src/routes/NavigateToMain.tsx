import React, { FC } from "react";
import { Navigate } from "react-router-dom";

const NavigateToMain: FC = () => {
  return (
   <>
      <Navigate to={"/"} replace />
   </>
  );
}

export default NavigateToMain;
