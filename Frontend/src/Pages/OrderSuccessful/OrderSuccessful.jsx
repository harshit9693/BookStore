import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "./OrderSuccessful.css";
import { StoreContext } from "../../context/storeContext";

const OrderSuccessful = () => {
  const { book_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const savedData = JSON.parse(localStorage.getItem("placeOrderData"));

  useEffect(() => {
    if (!savedData) {
      // Redirect to home page if savedData is not found
      navigate("/");
    } else {
      // Clear the saved data from local storage when the component mounts
      localStorage.removeItem("placeOrderData");
    }
  }, [savedData, navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Display the default browser warning message
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  let orderItems = [];
  book_list.forEach((item) => {
    if (cartItems[item._id] > 0) {
      let itemInfo = { ...item, quantity: cartItems[item._id] };
      orderItems.push(itemInfo);
    }
  });

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.text("Order Receipt", 20, 20);

    doc.text("Delivery Information", 20, 30);
    doc.text(`First Name: ${savedData.firstName}`, 20, 40);
    doc.text(`Last Name: ${savedData.lastName}`, 20, 50);
    doc.text(`Email: ${savedData.email}`, 20, 60);
    doc.text(`Street: ${savedData.street}`, 20, 70);
    doc.text(`City: ${savedData.city}`, 20, 80);
    doc.text(`State: ${savedData.state}`, 20, 90);
    doc.text(`Zipcode: ${savedData.zipcode}`, 20, 100);
    doc.text(`Country: ${savedData.country}`, 20, 110);
    doc.text(`Phone: ${savedData.phone}`, 20, 120);

    doc.text("Ordered Items", 20, 140);
    orderItems.forEach((item, index) => {
      doc.text(
        `${index + 1}. Title: ${item.name}, Price: ₹${item.price}, Quantity: ${
          item.quantity
        }, ₹ ${item.price * item.quantity}`,
        20,
        150 + index * 10
      );
    });

    const subtotal = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const deliveryFee = orderItems.length === 0 ? 0 : 20;
    const total = subtotal + deliveryFee;

    doc.text(`Subtotal: ₹ ${subtotal}`, 20, 160 + orderItems.length * 10);
    doc.text(
      `Delivery Fee: ₹ ${deliveryFee}`,
      20,
      170 + orderItems.length * 10
    );
    doc.text(`Total: ₹ ${total}`, 20, 180 + orderItems.length * 10);

    doc.save("order_receipt.pdf");
  };

  if (!savedData) {
    // Redirect to home page if savedData is not found
    navigate("/");
    return null;
  }

  return (
    <div className="order-successful">
      <h1>Order Successful!</h1>
      <div className="order-container">
        <div className="order-details">
          <h2>Delivery Information</h2>
          <p>
            <strong>First Name:</strong> {savedData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {savedData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {savedData.email}
          </p>
          <p>
            <strong>Street:</strong> {savedData.street}
          </p>
          <p>
            <strong>City:</strong> {savedData.city}
          </p>
          <p>
            <strong>State:</strong> {savedData.state}
          </p>
          <p>
            <strong>Zipcode:</strong> {savedData.zipcode}
          </p>
          <p>
            <strong>Country:</strong> {savedData.country}
          </p>
          <p>
            <strong>Phone:</strong> {savedData.phone}
          </p>
        </div>
        <div className="order-items">
          <h2>Ordered Items</h2>
          {orderItems.map((item, index) => (
            <div key={index} className="order-item">
              <img src={url + "/images/" + item.image} alt={item.name} />
              <div className="item-details">
                <p>
                  <strong>Title:</strong> {item.name}
                </p>
                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>
                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>
                <p>
                  <strong>Total:</strong>₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>
          <strong>Subtotal:</strong> ₹
          {orderItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
        </p>
        <p>
          <strong>Delivery Fee:</strong> ₹{orderItems.length === 0 ? 0 : 20}
        </p>
        <p>
          <strong>Total:</strong>₹
          {orderItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          ) + (orderItems.length === 0 ? 0 : 20)}
        </p>
      </div>
      <button className="download-receipt" onClick={downloadReceipt}>
        Download Receipt
      </button>
      <button className="download-receipt" onClick={() => navigate("/")}>
        Go to Home Page
      </button>
    </div>
  );
};

export default OrderSuccessful;
