import React, { useEffect, useState } from "react";
import { getlocalstorage, setlocalstorage } from "../localstorage/storage";
import { ProductCard } from "../Components/ProductCard";
import UserCard from "../Components/UserCard";
import { Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AuthUser = () => {
  const [users, setusers] = useState(null);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  // const reduxdata = useSelector((state) => {
  //   console.log(state.customers, "state redux data");
  //   return state.customers;
  // });

  const makeloginAuthuser = async (data) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/users", {
        method: "GET" /* or POST/PUT/PATCH/DELETE */,
        headers: {
          Authorization: `Bearer ${data}`,
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      setusers(res.users);
      console.log(res);
    } catch (error) {
      console.log("Not Authorized User");
    }
  };

  useEffect(() => {
    setloading(true);
    // const data = getlocalstorage("userinfo");
    const token = localStorage.getItem("userToken");
    console.log(token);
    // data ? navigate("/auth/users") : navigate("/");

    setloading(false);

    makeloginAuthuser(token);
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <Row gutter={[10, 10]} justify="center">
      {users && users?.map((user) => <UserCard key={user.id} user={user} />)}
    </Row>
  );
};

export default AuthUser;
