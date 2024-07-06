import express from "express"
import { addBook, getBookById, listBook, removeBook } from "../controllers/bookController.js"
import multer from "multer"     //using this we store image 

const bookRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload = multer({storage:storage})    //middle ware

//methods end points
bookRouter.post("/add",upload.single("image"),addBook)
bookRouter.get("/list",listBook)
bookRouter.post("/remove",removeBook)
// Fetch book by _id
bookRouter.get("/:id",getBookById)



export default bookRouter