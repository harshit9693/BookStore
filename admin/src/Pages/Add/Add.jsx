import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Fiction",
  });
  //writing a function show that any change is saved within the data
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!data.name || !data.description || !data.price || !image) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/book/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Fiction",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    }
  };

  const isFormFilled = data.name && data.description && data.price && image;

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category  flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Fiction">Fiction</option>
              <option value="Non Fiction">Non Fiction</option>
              <option value="Children">Children</option>
              <option value="Sci_Fi">Sci_Fi</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹ 200"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className={`add-btn ${isFormFilled ? "filled" : ""}`}
          disabled={!isFormFilled}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
