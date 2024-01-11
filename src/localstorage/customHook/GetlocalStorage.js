import { toast } from "react-toastify";

export const useLocalStorageGetter = () => {
  const getlocalstorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log("Error getting values from localstorage ");
      toast.error(error);
      return null;
    }
  };

  // Return the getlocalstorage function
  return getlocalstorage;
};
