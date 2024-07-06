import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect(`mongodb+srv://greatstack:Hapit123@cluster0.ovycnvu.mongodb.net/BOOKSTORE`).then(()=>console.log("DB Connected"));
}

