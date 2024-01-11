// import React, { useEffect } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Checkbox, Form, Input, Spin } from "antd";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// import { getlocalstorage, setlocalstorage } from "../localstorage/storage";
// const Register = () => {
//   const navigate = useNavigate();
//   const [isverified, setisverified] = useState(false);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     setloading(true);
//     const pass = getlocalstorage("pass");
//     const user = getlocalstorage("email");
//     // const pass = localStorage.getItem("pass");
//     // const user = localStorage.getItem("email");
//     if (user && pass) {
//       // setisverified(true);
//       navigate("/products");
//     }
//     setloading(false);
//   }, []);
//   if (loading) {
//     return <Spin size="large" />;
//   }

//   const makeRegisterRequest = async (email, password) => {
//     try {
//       const response = await fetch("https://dummyjson.com/auth/Register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: email,
//           password: password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Login successful
//         setlocalstorage("email", email);
//         setlocalstorage("pass", password);
//         navigate("/products");
//       } else {
//         // Login failed
//         throw new Error(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   const onFinish = (values) => {
//     const email = values.Email;
//     const password = values.password;

//     try {
//       if (email && password) {
//         makeRegisterRequest(email, password);
//       } else {
//         throw new Error("Email and password are required");
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   // console.log(username, password);

//   // const onFinish = (values) => {
//   //   console.log(values);
//   //   const email = values.Email;
//   //   const pass = values.password;
//   //   try {
//   //     if (email === values.Email && pass === values.password) {
//   //       console.log(email);
//   //       setlocalstorage("email", email);
//   //       setlocalstorage("pass", pass);
//   //       // localStorage.setItem("email", email);
//   //       // localStorage.setItem("pass", pass);
//   //       navigate("/products");
//   //     } else {
//   //       throw new Error("Invalid format");
//   //     }
//   //   } catch (error) {
//   //     console.error(error.message);
//   //     toast.error(error.message);
//   //   }
//   // };

//   return (
//     <div className="login">
//       <Form
//         name="normal_login"
//         className="login-form"
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           name="Email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Email!",
//             },
//             // {
//             //   type: "email",
//             //   message: "Please Enter valid Email",
//             // },
//             {
//               pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//               message: "Please enter a valid email address!",
//             },
//           ]}
//         >
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Email"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Password!",
//             },
//             {
//               min: 6,
//               message: "Length greater than 5",
//             },
//           ]}
//         >
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//         </Form.Item>

//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form-button"
//           >
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };
// export default Register;

import React, { useEffect } from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getlocalstorage, setlocalstorage } from "../localstorage/storage";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const pass = getlocalstorage("pass");
    const user = getlocalstorage("email");
    if (user && pass) {
      navigate("/products");
    }
    setloading(false);
  }, []);

  const makeRegisterRequest = async (
    email,
    password,
    firstName,
    lastName,
    age
  ) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          age: age,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        setlocalstorage("email", email);
        setlocalstorage("pass", password);
        navigate("/products");
      } else {
        // Registration failed
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const onFinish = (values) => {
    const email = values.Email;
    const password = values.password;
    const firstName = values.firstName;
    const lastName = values.lastName;
    const age = values.age;

    try {
      if (email && password && firstName && lastName && age) {
        // Check if it's a registration attempt or a Register attempt
        // const isRegistration = values.register;
        // if (isRegistration) {
        makeRegisterRequest(email, password, firstName, lastName, age);
        // } else {
        // Handle login
        // ...
        // }
      } else {
        throw new Error("All fields are required for registration");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  if (loading) {
    return <Spin size="large" />;
  }

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
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
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
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your Age!",
            },
          ]}
        >
          <Input type="number" placeholder="Age" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item name="register" valuePropName="checked" noStyle>
            <Checkbox>Register</Checkbox>
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
            {/* {values.register ? "Register" : "Log in"} */}
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
