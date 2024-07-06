import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




//app config
const app = express()
const PORT = process.env.PORT || 4000

//middleware
app.use(express.json()) //using this middleware whenever we get the request from frontend it will be parsed through json
app.use(cors()) //using this we can access the backend from frontend



//DB Coonnection
connectDB();


///api end points
app.use("/api/book",bookRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart/",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
  res.send("API Working")
})   //http method to request data from  server

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT,()=>{
  console.log(`Server Started on http://localhost:${PORT}`)
})

// mongodb+srv://greatstack:Hapit123@cluster0.ovycnvu.mongodb.net/?