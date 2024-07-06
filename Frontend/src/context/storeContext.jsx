//here we will mount the the categories list
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { book_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [book_list, setBookList] = useState([]);

  const addToCart = async (itemId) => {
    if (!token) {
      toast.error("Please sign in to add items to the cart.");
      // navigate("/login");
      return;
    }
    if (!token) {
      setShowLogin(true);
      return;
    }
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
    toast.success("Added to cart!");
    // try {
    //   await axios.post(
    //     url + "/api/cart/add",
    //     { itemId },
    //     { headers: { token } }
    //   );
    //   toast.success("Added to cart!");
    // } catch (error) {
    //   toast.error("Error adding to cart");
    // }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.error("Removed from cart");
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const clearCart = async () => {
    setCartItems({});
    if (token) {
      await axios.post(
        url + "/api/cart/clear",
        {}, // If necessary, send any payload needed for clearing the cart
        { headers: { token } }
      );
    }
    toast.info("Cart cleared");
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = book_list.find((book) => book._id == item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Item with ID ${item} not found in book_list`);
        }
      }
    }

    return totalAmount;
  };

  const fetchBookList = async () => {
    const response = await axios.get(url + "/api/book/list");
    setBookList(response.data.data);
  };

  const fetchBookById = async (bookId) => {
    try {
      const response = await axios.get(`${url}/api/book/${bookId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching book:", error);
      return null;
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchBookList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const contextValue = {
    book_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    fetchBookById,
    clearCart,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      <ToastContainer />
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

//updated remove from cart option
// const removeFromCart = (itemId) => {
//   setCartItems((prev) => {
//     const updatedCartItems = { ...prev };
//     if (updatedCartItems[itemId] > 1) {
//       updatedCartItems[itemId] -= 1;
//     } else {
//       delete updatedCartItems[itemId];
//     }
//     return updatedCartItems;
//   });
// };
