import React from 'react';
import { Form, Input, Button } from 'antd';
import { RegistrationFormValues } from '../../models/RegisterValues';

const SignInForm: React.FC = () => {
  const [form] = Form.useForm<RegistrationFormValues>();

  const onFinish = (values: RegistrationFormValues) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="registration"
        layout='vertical'
        style={{ maxWidth: 600 }}
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

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignInForm;