import React, { FC } from "react";
import RegistrationForm from "./RegistrationForm";

const SignUp: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{display: "flex", justifyContent:"space-around", alignItems:"flex-end", gap:"12px", marginBottom:"20px"}}>
          <img alt="some-pokemon " width={"150px"} height={"54px"} src={require('../../img/Pokemon-Header-png.png')} />
          <img alt="some-pokemon " width={"2px"} height={"54px"} src={require('../../img/Rectangle 1.png')} />
          <img alt="some-pokemon " width={"150px"} height={"54px"} src={require('../../img/Clicker-Header.png')} />
      </div>
      <div style={{display: "flex", flexDirection:"column", width: '400px', padding: '20px', boxShadow: '0px 0px 16px 0px #3A3A3A1A', 
      borderRadius: '8px'}}>
        <RegistrationForm />
    </div>
   </div>
  )
}

export default SignUp;
