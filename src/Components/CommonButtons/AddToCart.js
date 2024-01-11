import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getlocalstorage } from "../../localstorage/storage";

const AddToCart = ({ product }) => {
  const { loading } = useSelector((state) => state.Auth);
  const token = localStorage.getItem("userToken");
  console.log(token);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLoginClick = () => {
    // Store the current location before navigating to the login page
    localStorage.setItem("redirectPath", location.pathname);
    navigate("/");
  };
  return (
    <>
      {token ? (
        <Button
          className="product-card-button"
          type="link"
          icon={<ShoppingCartOutlined style={{ fontSize: "25px" }} />}
          onClick={() => dispatch(addToCart(product))}
          // color="#FFF"
        >
          Add to Cart
        </Button>
      ) : (
        // <Link to={`/`}>
        <Button type="link" onClick={handleLoginClick}>
          Login
        </Button>
        // </Link>
      )}
    </>
  );
};

export default AddToCart;
