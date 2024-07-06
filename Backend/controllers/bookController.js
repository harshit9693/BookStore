import { log } from "console";
import bookModel from "../models/bookModel.js";
import fs from "fs"


//add book item

const addBook = async(req,res)=>{
  let image_filename = `${req.file.filename}`;

  const book = new bookModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
  })

  try {
    await book.save();
    res.json({success:true,message:"Book Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

//all book list
const listBook = async(req,res)=>{
  try {
    const books = await bookModel.find({});
    res.json({success:true,data:books})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error})
  }
}

//remove book 
const removeBook = async(req,res)=>{
  try {
    const book = await bookModel.findById(req.body.id);   //find the id of the image
    fs.unlink(`uploads/${book.image}`,()=>{})             //delete from the uploads folder

    await bookModel.findByIdAndDelete(req.body.id)        //deletes from the mongodb
    res.json({success:true,message:"Book Removed"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
  }
}

// Fetch book by id
const getBookById = async (req, res) => {
  // const { id } = req.params;
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }
    res.json({ success: true, data: book });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// Controller function to get recent books
// const getRecentBooks = async (req, res) => {
//   try {
//     // Fetch the most recent 5 books based on the createdAt field
//     const recentBooks = await Book.find().sort({ createdAt: -1 }).limit(5);
//     res.json(recentBooks);
//     console.log(recentBooks)
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching recent books', error });
//   }
// };


export {addBook,listBook,removeBook,getBookById}