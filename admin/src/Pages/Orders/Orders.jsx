import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets.js";
import { jsPDF } from "jspdf";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  const downloadReceipt = (order) => {
    const doc = new jsPDF();
    doc.text("Order Receipt", 20, 20);
    doc.text(
      `Name: ${order.address.firstName} ${order.address.lastName}`,
      20,
      30
    );
    doc.text(
      `Address: ${order.address.street}, ${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`,
      20,
      40
    );
    doc.text(`Phone: ${order.address.phone}`, 20, 50);
    doc.text(`Total Amount: ₹ ${order.amount}`, 20, 60);

    let y = 70;
    order.items.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} - Quantity: ${item.quantity}`,
        20,
        y
      );
      y += 10;
    });

    doc.save(`receipt_${order._id}.pdf`);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-book">
                {order.items.map((item, itemIndex) => {
                  if (itemIndex === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹ {order.amount}</p>
            <button
              className="download-button"
              onClick={() => downloadReceipt(order)}
            >
              Download Receipt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
