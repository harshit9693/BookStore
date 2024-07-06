import React, { useContext } from "react";
import "./BookDisplay.css";
import { StoreContext } from "../../context/storeContext";
import BookCard from "../BookCard/BookCard";

const BookDisplay = ({ category }) => {
  const { book_list } = useContext(StoreContext);

  // console.log(category);
  if (!category || category === "All") {
    return null; // Hide the book display if no category is selected or if "All" is selected
  }
  return (
    <div className="book-display" id="book-display">
      <h2 className="book-display-heading">Recommonded {category} Books </h2>
      <div className="book-display-list">
        {book_list.map((item, index) => {
          // category === "All" ||
          if (category === item.category) {
            return (
              <BookCard
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default BookDisplay;
