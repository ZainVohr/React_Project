import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { toast } from "react-toastify";
import "../App.css";
import { useAuthentication } from "../customHooks/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../redux/auth/AuthAction";
import { useNavigate } from "react-router-dom";
import { getlocalstorage } from "../localstorage/storage";

const Login = () => {
  // const { userInfo, error } = useSelector((state) => state.Auth);
  const [loading, setloading] = useState(true);
  const redirectPath = localStorage.getItem("redirectPath");
  const userInfo = getlocalstorage("userInfo");
  const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
    // const user = getlocalstorage("user");
    // console.log(user);

    if (userInfo) {
      navigate("/products");
      // console.log(user, "pass and user ");
      // setAuthenticatedUser(user);
      // dispatch(setUser(user));
      // dispatch(getAuthUser(userInfo));
      if (redirectPath) {
        navigate(redirectPath);
      } else {
        navigate("/products");
      }
    }
    setloading(false);
  }, [userInfo]);
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/products");
  //   }
  // }, []);
  const dispatch = useDispatch();

  // const { login, loading } = useAuthentication();
  if (loading) {
    return <Spin size="large" />;
  }
  const onFinish = (values) => {
    // console.log(values);
    const email = values.Email;
    const password = values.password;
    try {
      if (email && password) {
        console.log(email, password, "emailand pas");
        // login(email, password);
        const data = { email, password };
        dispatch(getAuthUser(data)).then(() => {
          const redirePath = localStorage.getItem("redirectPath");
          navigate(redirePath);
        });
        // userInfo ? navigate("/products") : navigate("/");

        // makeLoginRequest(email, pass);
      } else {
        throw new Error("Email and password are required");
      }
    } catch (error) {
      // console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },

            // {
            //   pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //   message: "Please enter a valid email address!",
            // },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              min: 6,
              message: "Length greater than 5",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
