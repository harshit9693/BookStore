// import orderModel from "../models/orderModel.js";

// import userModel from "../models/userModel.js"
// import stripe from "stripe"


// // Placing user order from frontend


// const placeOrder = async (req,res)=>{
//   const frontend_url = "http://localhost:5173"
//   try {
//     const newOrder = new orderModel({
//       userId:req.body.userId,
//       items:req.body.items,
//       amount:req.body.amount,
//       address:req.body.address
//     })
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
  
//     const line_items = req.body.items.map((item)=>({
//       price_data:{
//         currency:"inr",
//         product_data:{
//           name:item.name
//         },
//         unit_amount:item.price*100*80
//       },
//       quantity:item.quality
//     }))
  
//     line_items.push({
//       price_data:{
//         currency:"inr",
//         product_data:{
//           name:"Delivery Charges"
//         },
//         unit_name:2*100*80
//       },
//       quantity:1
//     })
  
//     const session = await stripe.Checkout.session.create({
//       line_items:line_items,
//       mode:"payment",
//       success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
//     })
//     res.json({success:true,session_url:session.url})
//   } catch (error) {
//     console.log(error)
//     res.json({success:false,message:"Error"})
//   }
// }

// export {placeOrder}

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    // console.log(newOrder);
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, orderId: newOrder._id });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//users order for frontend
const userOrders = async(req,res)=>{

  try {
    const orders = await orderModel.find({userId:req.body.userId});
    res.json({success:"true",data:orders})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

const listOrder = async (req,res)=>{

  try {
    const orders = await orderModel.find({})
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

export { placeOrder ,userOrders,listOrder};