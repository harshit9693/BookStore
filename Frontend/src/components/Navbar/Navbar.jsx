import React, { useContext, useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // State for mobile menu

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const logout = () => {
    // console.log("Token before logout:", localStorage.getItem("token"));
    localStorage.removeItem("token");
    // console.log("Token after logout:", localStorage.getItem("token"));
    setToken("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the mobile menu
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <Link to="/" className="logo">
          BookStore
        </Link>
      </div>
      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-cat"
          onClick={() => setMenu("Explore")}
          className={menu === "Explore" ? "active" : ""}
        >
          Explore
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
        <Link
          to="/myorders"
          onClick={() => setMenu("My Orders")}
          className={menu === "My Orders" ? "active" : ""}
        >
          My Orders
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" width="29" height="30" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setShowLogin(true);
            }}
          >
            sign in
          </button>
        ) : (
          <div
            className="navbar-profile"
            ref={dropdownRef}
            onClick={toggleDropdown}
          >
            <img src={assets.profile_icon} alt="" />
            {dropdownVisible && (
              <ul className="nav-profile-dropdown">
                <li
                  onClick={() => {
                    navigate("/myorders");
                    setDropdownVisible(false);
                  }}
                >
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li
                  onClick={() => {
                    logout();
                    setDropdownVisible(false);
                  }}
                >
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
