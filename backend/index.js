const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product.Routes");
const authRoutes=require("./routes/auth.routes");
const mongoose = require("mongoose");



const app = express();


app.use(bodyParser.json());
mongoose.connect("mongodb+srv://admin123:admin123@cluster0.1ortb87.mongodb.net/?appName=Cluster0");


app.use("/farm",productRoutes);
app.use("/auth",authRoutes);





app.listen(3000,()=>{

console.log("server is running at 3000");

});  