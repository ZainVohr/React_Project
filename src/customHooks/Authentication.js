import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorageSetter } from "../localstorage/customHook/Setlocalstorage";
import { useLocalStorageGetter } from "../localstorage/customHook/GetlocalStorage";
import { useUserAuth } from "../customHooks/AuthHook";

export const useAuthentication = () => {
  const { userAuth, setAuthenticatedUser } = useUserAuth();
  // console.log(userAuth, "asas");
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const setlocalstorage = useLocalStorageSetter();
  const getlocalstorage = useLocalStorageGetter();

  const redirectPath = localStorage.getItem("redirectPath");
  console.log("path", redirectPath);

  useEffect(() => {
    setloading(true);
    const user = getlocalstorage("user");
    // console.log(user);

    if (user) {
      // console.log(user, "pass and user ");
      setAuthenticatedUser(user);
      // dispatch(setUser(user));
      if (redirectPath) {
        navigate(redirectPath);
      } else {
        navigate("/products");
      }
    }
    setloading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data, "gfeds");
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(data));
        setAuthenticatedUser(data);
        // dispatch(setUser(data));
        if (redirectPath) {
          navigate(redirectPath);
        } else {
          navigate("/products");
        }
      } else {
        // console.log(response);
        toast.error("Invalid");
      }
    } catch (error) {
      // console.error(error.message);
      toast.error(error.message);
    }
  };
  // console.log(username, password);

  return {
    login,
    loading,
  };
};
