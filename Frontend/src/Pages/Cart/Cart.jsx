import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, book_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const handleAddToCart = (itemId) => {
    if (!localStorage.getItem("token")) {
      setShowLogin(true);
    } else {
      addToCart(itemId);
    }
  };
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {book_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  {/* {console.log(item.image)} */}
                  <p>{item.name}</p>
                  <p>
                    <span>&#8377;</span> {item.price}
                  </p>
                  <p>{cartItems[item._id]}</p>
                  <p>
                    <span>&#8377;</span> {item.price * cartItems[item._id]}
                  </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                <span>&#8377;</span> {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>
                <span>&#8377;</span> {getTotalCartAmount() == 0 ? 0 : 20}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                <span>&#8377;</span>{" "}
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            disabled={getTotalCartAmount() === 0}
            className={getTotalCartAmount() === 0 ? "" : "green-button"}
          >
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You have a promo code, Enter it here</p>
            <div
              className="cart-promocode-input
            "
            >
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
