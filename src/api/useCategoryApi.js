import { useState, useEffect } from "react";
import axios from "axios";
import { setError, setLoading, setData } from "../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";
const useCategoryApi = (url) => {
  // const [loading, setLoading] = useState(true);
  // const [Data, setData] = useState([]);
  // const [error, setError] = useState('');
  const dataa = useSelector((state) => {
    return state.category;
  });
  console.log(dataa, "sa");
  const { CategoryData, loading, error } = useSelector((state) => {
    return state.category;
  });
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      if (CategoryData.length === 0) {
        console.log(CategoryData);
        const response = await axios.get(url);
        const Data = response.data;
        // console.log(data.products.length, "BEFORE json")
        dispatch(setData(Data));
      }
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, [CategoryData]);

  // useEffect(() => {
  //     // Fetch data from the API
  //     axios.get(url)
  //         .then((response) => {
  //             // console.log(response.data)
  //             setData(response.data);

  //             setLoading(false);
  //         })
  //         .catch((err) => {
  //             setError(err.message);
  //             setLoading(false);
  //         });
  // }, [url]);

  return { CategoryData, loading, error };
};

export default useCategoryApi;
