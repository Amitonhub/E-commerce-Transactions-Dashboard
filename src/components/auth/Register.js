import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/api";
import { batch, useDispatch } from "react-redux";
import { setIsLogin, setUserDetails } from "../../redux/reducers/loginSlice";

const Register = () => {
  const [registerUser, { isLoading, isError, isSuccess, data }] = useRegisterMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('accessToken', data.accessToken);
      batch(() => {
        dispatch(setUserDetails(data?.user))
        dispatch(setIsLogin(true))
      })
      navigate('/dashboard');
    }
  }, [isSuccess, data]);

  const onFinish = async (values) => {
    try {
      await registerUser({ name: values.name, email: values.email, password: values.password }).unwrap();
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Register</h1>
      <Form
        name="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} type="primary" htmlType="submit" disabled={isLoading}>
            Register
          </Button>
        </Form.Item>
        {isError && <h4 style={{color: 'red'}}>Error registering user</h4>}
        {isSuccess && <h4 style={{color: 'green'}}>User Registered successfully!</h4>}
        <p>Already have an account? <Link to="/login"><Button type="dashed">Login here</Button></Link></p>
      </Form>
      <div className={styles.demoInfo}>
        <p>
          Demo Login
          <br />
          Email: demo@demo.com
          <br />
          Password: 123456
        </p>
      </div>
    </div>
  );
};

export default Register;