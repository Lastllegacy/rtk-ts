import React from 'react';
import { Form, Input, Button, Image, Row } from 'antd';

interface RegistrationFormValues {
   login: string;
   password: string;
   confirm: string;
 }
 
 const RegistrationForm: React.FC = () => {
   const [form] = Form.useForm<RegistrationFormValues>();
 
   const onFinish = (values: RegistrationFormValues) => {
     console.log('Success:', values);
   };
 
   const onFinishFailed = (errorInfo: any) => {
     console.log('Failed:', errorInfo);
   };
 
   return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <div style={{width: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
         <Form
           form={form}
           name="registration"
           initialValues={{ remember: true }}
           onFinish={onFinish}
           style={{ maxWidth: 600}}
           onFinishFailed={onFinishFailed}
         >
           <Form.Item
             name="login"
             label="Login"
             rules={[{ required: true, message: 'Please input your login!' }]}
           >
            <Row gutter={15} />
             <Input placeholder="Login" />
           </Form.Item>
 
           <Form.Item
             name="password"
             label="Password"
             rules={[{ required: true, message: 'Please input your password!' }]}
           >
             <Input.Password placeholder="Password" />
           </Form.Item>
 
           <Form.Item
             name="confirm"
             label="Password confirmation"
             dependencies={['password']}
             hasFeedback
             rules={[
               {
                 required: true,
                 message: 'Please confirm your password!',
               },
               ({ getFieldValue }) => ({
                 validator(_, value) {
                   if (!value || getFieldValue('password') === value) {
                     return Promise.resolve();
                   }
                   return Promise.reject(new Error('The two passwords that you entered do not match!'));
                 },
               }),
             ]}
           >
             <Input.Password placeholder="Password confirmation" />
           </Form.Item>
 
           <Form.Item>
             <Button type="primary" htmlType="submit" block>
               Sign up
             </Button>
           </Form.Item>
         </Form>
       </div>
     </div>
   );
 };
 
 export default RegistrationForm;