const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 3421;
const connect = require("./configure");

app.use(express.json());
app.use(cors());

// routers details
const ProductRouter = require("./Controllers/Product.Controller");
const UserRouter = require("./Controllers/User.Controller");
// const RestaurantRouter = require("./Controllers/Restaurant.Controller");

// app.use("/restaurants/", RestaurantRouter);
app.use("/users/", UserRouter);
app.use("/products/", ProductRouter);


app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Port 3421 is listening..`);
    }
    catch(err){
        console.log(err.message);
    }
})
