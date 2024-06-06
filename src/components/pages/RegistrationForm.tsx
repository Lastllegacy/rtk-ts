import React from 'react';
import { Form, Input, Button } from 'antd';

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
         <Form
           form={form}
           name="registration"
           layout='vertical'
           style={{ maxWidth: 600}}
           initialValues={{ remember: true }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
         >
           <Form.Item
             name="login"
             label="Login"
             rules={[{ required: true, message: 'Please input your login!' }]}
           >
             <Input placeholder="Input login" />
           </Form.Item>
 
           <Form.Item
             name="password"
             label="Password"
             rules={[{ required: true, message: 'Please input your password!' }]}
           >
             <Input.Password placeholder="Input password" />
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
             <Input.Password placeholder="Input password again" />
           </Form.Item>
 
           <Form.Item>
             <Button type="primary" htmlType="submit" block>
               Sign up
             </Button>
           </Form.Item>
         </Form>
   );
 };
 
 export default RegistrationForm;