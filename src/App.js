import "./App.css";
import { Products } from "./Pages/Products";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./Pages/Mainpage";
import { ProductDetails } from "./Pages/ProductDetails";
import { Search } from "./Components/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart";
import Register from "./Pages/Register";
import AuthUser from "./Pages/AuthUser";
import Homee from "./Components/Homee";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Homee" element={<Homee />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/auth/users" element={<AuthUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
