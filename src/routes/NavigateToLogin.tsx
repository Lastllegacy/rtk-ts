import React, { FC } from "react";
import { Navigate } from "react-router-dom";

const NavigateToLogin: FC = () => {
  return (
   <>
      <Navigate to={"/login"} replace />
   </>
  );
}

export default NavigateToLogin;
