import mongoose from "mongoose";

//creating schema
const bookSchema = new mongoose.Schema({
  name:{type:String,required:[true, 'Path `name` is required.']},
  description:{type:String,required:[true, 'Path `description` is required.']},
  price:{type:Number,required:true},
  image:{type:String,required:true},
  category:{type:String,required:true}
},{
  timestamps: true // This adds createdAt and updatedAt fields automatically
  })

const bookModel = mongoose.models.book || mongoose.model("book",bookSchema);

export default bookModel;