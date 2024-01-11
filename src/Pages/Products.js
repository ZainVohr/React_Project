import React from "react";
import { ProductCard } from "../Components/ProductCard";
import useProductsApi from "../api/useProductsApi";
import { Spin } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useUserAuth } from "../customHooks/AuthHook";

export const Products = () => {
  const { data, loading, error } = useProductsApi(
    "https://dummyjson.com/products"
  );
  const { userAuth, setAuthenticatedUser } = useUserAuth();
  console.log(userAuth, "pro user auth");
  // console.log(data.products)
  const isLoggedIn = localStorage.getItem("user");
  if (loading) return <Spin size="large" />;

  if (error)
    return (
      <>
        <h3>Error Occured </h3>
        <ExclamationCircleFilled style={{ color: "red", fontSize: "50px" }} />
      </>
    );

  return (
    <div className="App">
      <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Products</h1>
      <div className="containergrid">
        <div className="grid">
          {data?.products?.map((prod, idx) => (
            <>
              <ProductCard key={`${idx}-${prod.id}`} product={prod} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
