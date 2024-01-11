import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setProductError,
  setProductLoading,
  setProductData,
} from "../redux/productSlice";

const useProductsApi = (url) => {
  const { data, loading, error } = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(setProductLoading(true));
    try {
      if (data.length === 0) {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.products.length, "BEFORE json")
        dispatch(setProductData(data));
      }
    } catch (error) {
      dispatch(setProductError(error));
    } finally {
      dispatch(setProductLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return { data, loading, error };
};

export default useProductsApi;
