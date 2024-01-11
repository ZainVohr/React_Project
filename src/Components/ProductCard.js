import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import AddToCart from "./CommonButtons/AddToCart";
import "../App.css";

export const ProductCard = ({ product }) => {
  // console.log('product', product)
  const { id, title, description, thumbnail, price } = product;

  // const pass = localStorage.getItem("pass");
  return (
    <Card
      key={id}
      className="antProduct-card"
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "3px solid #f0f0f0",
      }}
      //cover={<img alt="Thumbnail" src={thumbnail} className="antProduct-card-image" />}
      cover={
        <img
          alt="Thumbnail"
          src={thumbnail}
          style={{ objectFit: "cover", height: "200px" }}
        />
      }
      actions={[
        <Link to={`/products/${id}`}>
          <Button type="link">Details</Button>
        </Link>,
        <AddToCart product={product} />,
      ]}
    >
      <Card.Meta
        title={<Link to={`/products/${id}`}>{title}</Link>}
        description={
          <>
            <p>${price}</p>
            {description}
          </>
        }
      />
    </Card>
  );
};
