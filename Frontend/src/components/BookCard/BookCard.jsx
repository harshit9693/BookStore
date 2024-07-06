import React, { useContext, useState } from "react";
import "./BookCard.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";

function BookCard({ id, name, price, description, image }) {
  //creating an state variable to add the book to the cart
  // const [bookCount, setBookCount] = useState(0);

  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="book">
      <div className="book-img-container">
        <img className="book-image" src={url + "/images/" + image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="book-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="book-quantity">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="book-info">
        <div className="book-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="book-desc">{description}</p>
        <p className="book-price">
          <span>&#8377;</span> {price}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
