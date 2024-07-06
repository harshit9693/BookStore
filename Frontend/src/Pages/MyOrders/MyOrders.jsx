import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import { jsPDF } from "jspdf";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };

  const downloadReceipt = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Order Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 20, 30);
    doc.text(`Amount: ₹ ${order.amount}`, 20, 40);
    doc.text(`Items:`, 20, 50);

    order.items.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} - Quantity: ${item.quantity}`,
        20,
        60 + index * 10
      );
    });

    doc.text(`Delivery Address:`, 20, 70 + order.items.length * 10);
    const address = order.address;
    doc.text(
      `${address.firstName} ${address.lastName}, ${address.street}, ${address.city}, ${address.state}, ${address.zipcode}, ${address.country}`,
      20,
      80 + order.items.length * 10
    );

    doc.save(`receipt_${order._id}.pdf`);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <p>
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} X {item.quantity}
                  {index < order.items.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p>₹ {order.amount}</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span>
              <b>Order Successful</b>
            </p>
            <button onClick={() => downloadReceipt(order)}>
              Download Receipt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
