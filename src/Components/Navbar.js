import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Spin, Avatar } from "antd";
import { getlocalstorage, removelocalstorage } from "../localstorage/storage";
import { selectUser } from "../redux/usersSlice";
import "../App.css";
const Navbar = () => {
  const authh = useSelector((state) => state.Auth);
  const isLoggedIn = getlocalstorage("user");
  const token = localStorage.getItem("userToken");
  console.log(authh.userInfo, "userinfo");
  const handlelogout = () => {
    // removelocalstorage("user");
    removelocalstorage("userToken");

    // removelocalstorage("pass");
    removelocalstorage("redirectPath");
    window.location.href = "/";
  };

  const { cartTotalQuantity } = useSelector((state) => {
    return state.cart;
  });
  const customer = useSelector((state) => {
    // console.log(state.customers, "userrrr");
    return state.customers;
  });
  // console.log(customer.user.firstName);

  return (
    <nav className="navbar">
      <div className="links">
        <Link to={"/Home"}>
          <Button type="link ">Home</Button>
        </Link>
        <Link to={"/products"}>
          {" "}
          <Button type="link ">Products</Button>
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {token ? (
          <>
            <div className="right-section">
              <span
                style={{ color: "white" }}
              >{`${authh.userInfo.firstName} ${authh.userInfo.lastName}`}</span>
              <img
                src={authh.userInfo.image}
                alt={`Avatar of ${authh.userInfo.firstName}`}
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <span style={{ color: "white", padding: "5px" }}>
              <Avatar size={32} icon={<UserOutlined />} />
              Guest
            </span>
          </>
        )}
        {token && (
          <Link to={"/"}>
            <Button type="link" onClick={handlelogout}>
              <LogoutOutlined size="large" /> Logout
            </Button>
          </Link>
        )}
        <Link to={"/cart"}>
          <div className="cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
