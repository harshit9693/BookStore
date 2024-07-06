import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import "./DailyBookPick.css"; // Import the CSS file for styling
import { StoreContext } from "../../context/storeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DailyBookPick = ({ bookId }) => {
  const { cartItems, addToCart, removeFromCart, fetchBookById, url, token } =
    useContext(StoreContext);

  const [bookOfTheDay, setBookOfTheDay] = useState(null);
  const [buttonColor, setButtonColor] = useState("add");
  const [showGoToCart, setShowGoToCart] = useState(false);
  const navigate = useNavigate(); // Get the history object

  useEffect(() => {
    const getBook = async () => {
      const book = await fetchBookById(bookId);
      setBookOfTheDay(book);
      if (book) {
        const isInCart = !!cartItems[book._id];
        setButtonColor(isInCart ? "remove" : "add");
        setShowGoToCart(isInCart);
      }
    };

    getBook();
  }, [bookId, fetchBookById, cartItems]);

  if (!bookOfTheDay) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = () => {
    if (!token) {
      toast.error("Please sign in to add items to the cart.");
      // navigate("/login");
      return;
    }
    if (showGoToCart) {
      removeFromCart(bookOfTheDay._id);
      setButtonColor("add");
      setShowGoToCart(false);
    } else {
      addToCart(bookOfTheDay._id);
      setButtonColor("remove");
      setShowGoToCart(true);
    }
  };

  const handleGoToCartClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  // Get current date and format it
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="book-of-the-day">
      <h1 className="section-title">Daily Book Pick</h1>
      <div className="book-container">
        <div className="book-container-left">
          <img
            src={url + "/images/" + bookOfTheDay.image}
            alt={bookOfTheDay.name}
            className="book-cover"
          />
        </div>
        <div className="book-container-right">
          <div className="book-details">
            <h3 className="book-title">{bookOfTheDay.name}</h3>
            <p className="author-name">by Lisa Wingate</p>
            <p className="book-description">{bookOfTheDay.description}</p>
            <p className="book-genre">Genre: {bookOfTheDay.category}</p>
            <p className="publication-date">Published: {formattedDate}</p>
            <p className="book-price">
              Price: <span>&#8377;</span> {bookOfTheDay.price}
            </p>
            <div className="book-rating">
              ⭐⭐⭐⭐☆ (4.5/5 based on 200 reviews)
            </div>
            <div className="book-actions">
              <button
                className={`add-to-cart ${buttonColor}`}
                onClick={handleButtonClick}
              >
                {showGoToCart ? "Remove from Cart" : "Add to Cart"}
              </button>
              {showGoToCart && (
                <button className="go-to-cart" onClick={handleGoToCartClick}>
                  Go to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBookPick;
