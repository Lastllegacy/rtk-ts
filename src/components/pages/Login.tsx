import React, { FC } from "react";
import RegistrationForm from "../UI/RegistrationForm";
import LogoHeader from "../UI/LogoHeader";
import { TabsProps, Tabs } from "antd";
import SignInForm from '../UI/SignInForm';

const Login: FC = () => {

  const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Sign In',
      children: <SignInForm />,
    },
    {
      key: '2',
      label: 'Sign Up',
      children: <RegistrationForm />,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LogoHeader />
      <div style={{ display: "flex", flexDirection: "column", width: '400px', padding: '20px', boxShadow: '0px 0px 16px 0px #3A3A3A1A',
      borderRadius: '8px'}}>
        <Tabs centered items={items} onChange={onChange} />
      </div>

    </div>
  )
}

export default Login;
