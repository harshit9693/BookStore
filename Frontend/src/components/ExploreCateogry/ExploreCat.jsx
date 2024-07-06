import React from "react";
import "./ExploreCat.css";
import { category_list } from "../../assets/assets";

const ExploreCat = ({ category, setCategory }) => {
  return (
    <div className="explore-cat" id="explore-cat">
      <h1 className="explore-cat-heading">Explore Categories</h1>
      <p className="explore-cat-text">
        "Get lost in our vast collection: Explore categories and discover new
        titles, authors, and genres that will take you on a journey of a
        lifetime!"
      </p>
      <div className="explore-cat-list">
        {category_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(
                  (prev) =>
                    prev == item.category_name ? "" : item.category_name
                  // if i want to display all items then we pass All in inverted comma
                )
              }
              key={index}
              className="explore-cat-list-item"
            >
              <img
                className={category == item.category_name ? "active" : ""}
                src={item.category_image}
                alt=""
              />
              <p>{item.category_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreCat;
