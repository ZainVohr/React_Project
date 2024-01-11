// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { ProductCard } from "../Components/ProductCard";
// import { useSelector } from "react-redux";

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);
//   const [Error, seterror] = useState("");
//   const data = useSelector((state) => {
//     // console.log(state.cart)
//     return state.cart;
//   });

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/${id}`)
//       .then((response) => setProducts(response.data))

//       .catch((error) => seterror(error.message));
//   }, [id]);

//   if (!products) {
//     return <div>Loading...</div>;
//   }
//   console.log("productDetails", products);

//   return (
//     <>
//       <div className="prdouctsDetailcard">
//         {/* <ProductCard product={products} onAddToCart={() => dispatch(addToCart(products))} /> */}
//         <ProductCard product={products} />
//       </div>
//       <div className="subtotal">
//         <div>Cart Subtotal: ${data.cartTotalAmount.toFixed(2)}</div>
//         <div>Quantity: {data.cartTotalQuantity}</div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Image, Row, Col, Button, Divider } from "antd";
// import "antd/dist/antd.css";
import axios from "axios";
import AddToCart from "../Components/CommonButtons/AddToCart";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch product details by ID
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={6.5}>
          <Image src={thumbnail} alt={title} />
        </Col>
        <Col span={17}>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1>{title}</h1>
            <Descriptions>
              <Descriptions.Item label="Description">
                {description}
              </Descriptions.Item>
              <Descriptions.Item label="Price">${price}</Descriptions.Item>
              <Descriptions.Item label="Discount">
                {discountPercentage}%
              </Descriptions.Item>
              <Descriptions.Item label="Rating">{rating}</Descriptions.Item>
              <Descriptions.Item label="Stock">{stock}</Descriptions.Item>
              <Descriptions.Item label="Brand">{brand}</Descriptions.Item>
              <Descriptions.Item label="Category">{category}</Descriptions.Item>
            </Descriptions>
            <Divider />

            <Button>
              <AddToCart product={product} />
            </Button>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Product Images</h2>
          <Row gutter={[16, 16]}>
            {images.map((image, index) => (
              <Col span={8} key={index}>
                <Image src={image} alt={`${title} - Image ${index + 1}`} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// export default ProductDetails;
