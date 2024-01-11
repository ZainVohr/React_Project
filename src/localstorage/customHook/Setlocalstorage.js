import { toast } from "react-toastify";

export const useLocalStorageSetter = () => {
  const setlocalstorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error setting values in localstorage");
      toast.error(error);
    }
  };

  // Return the setlocalstorage function
  return setlocalstorage;
};
