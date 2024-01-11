import React from "react";
import { toast } from "react-toastify";

export const setlocalstorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error setting values in localstorage");
    toast.error(error);
  }
};

export const getlocalstorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log("Error getting values from localstorage ");
    toast.error(error);
    return null;
  }
};

export const removelocalstorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing storage");
  }
};
// export const {setlocalstorage , getlocalstorage , removelocalstorage}
