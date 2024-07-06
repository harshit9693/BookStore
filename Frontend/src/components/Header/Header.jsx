import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Header() {
  const handleScrollToCategories = () => {
    const categoriesSection = document.getElementById("explore-cat");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-left ">
        {/* <img src={assets.header_img} alt="" /> */}
        <h2 className="header-left-heading">
          Get lost in a book, and find yourself with{" "}
          <span className="header-span">BookStore</span>
        </h2>
        <p className="header-p">
          Welcome to <span className="header-span">BookStore!</span> – your
          one-stop destination for buying and selling books. Whether you're
          looking to give your old books a new home or searching for your next
          great read, we've got you covered. Our platform makes it easy for you
          to:
        </p>
        <ul>
          <li>Buy New Books</li>
          <li>Sell Old Books</li>
          <li>Buy Old Books</li>
        </ul>
        <button onClick={handleScrollToCategories}>View Categories</button>
      </div>
      <div className="header-right">
        <img
          src={assets.header_img}
          alt=""
          width="600px"
          height="400px"
          className="header-image"
        />
      </div>
    </div>
  );
}

export default Header;
