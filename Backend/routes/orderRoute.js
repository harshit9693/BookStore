import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, userOrders,listOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

//end-points
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrder)
//here we use middleware which convert the token into the userId

export default orderRouter;