import React, { FC } from "react";

const LogoHeader : FC = ()  =>  {
  return (
   <div style={{display: "flex", justifyContent:"space-around", alignItems:"flex-end", gap:"12px", marginBottom:"20px"}}>
          <img alt="some-pokemon " width={"150px"} height={"54px"} src={require('../../img/Pokemon-Header-png.png')} />
          <img alt="some-pokemon " width={"2px"} height={"54px"} src={require('../../img/Rectangle 1.png')} />
          <img alt="some-pokemon " width={"150px"} height={"54px"} src={require('../../img/Clicker-Header.png')} />
      </div>
  )
}

export default LogoHeader;
