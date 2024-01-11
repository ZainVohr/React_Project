import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addToCart,
  clearCart,
  decreaseCartItem,
  getTotals,
  removeCartItems,
} from "../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => {
    console.log(state.cart, "qadsa");
    return state.cart;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <div className="start-shopping">
            <Link to="/products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.thumbnail} alt={cartItem.title}></img>
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button
                      onClick={() => {
                        dispatch(removeCartItems(cartItem));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button
                    onClick={() => {
                      dispatch(decreaseCartItem(cartItem));
                    }}
                  >
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button
                    onClick={() => {
                      dispatch(addToCart(cartItem));
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-cart"
              onClick={() => dispatch(clearCart(cart.cartItem))}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="suubtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to="/checkout">
                <button>Check Out</button>
              </Link>
              <div className="continue-shopping">
                <Link to="/products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
