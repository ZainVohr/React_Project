import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Spin, Button, Result } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import CustomButton from "../Components/CommonButtons/Button";
import Login from "./Login";

export const Mainpage = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllData());
  //   }, [dispatch]);

  //   const data = useSelector((state) => state.products);

  //   if (data.loading) return <Spin size="large" />;
  //   if (data.error)
  //     return (
  //       <Result
  //         status="error"
  //         title="Error Occurred"
  //         icon={
  //           <ExclamationCircleFilled style={{ color: "red", fontSize: "50px" }} />
  //         }
  //       />
  //     );

  return (
    <div>
      <header style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Our Amazing Online Store!</h1>
        <p>Discover the Latest and Greatest Products Right Here</p>
      </header>

      <div>
        {/* {Array.isArray(data?.products?.products) &&
                    data?.products?.products.map((ele) => (
                        <li key={ele.id}>
                            {ele.title}
                        </li>
                    ))} */}
        <Login />
      </div>

      <section style={{ textAlign: "center", padding: "20px" }}>
        <p>
          Explore our wide range of products and find the perfect items that
          suit your needs.
        </p>
        <p>Don't miss out on the latest trends and exclusive deals!</p>
      </section>

      <CustomButton text="Start Exploring" type="primary" to="/products" />
    </div>
  );
};
