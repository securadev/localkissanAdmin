const express = require("express");
require("dotenv").config(); 
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product.Routes");
const authRoutes=require("./routes/auth.routes");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

app.use("/farm",productRoutes);
app.use("/auth",authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});


