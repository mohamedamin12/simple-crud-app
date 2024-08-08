require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 6666;
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
const productRoute = require("./routes/product.route.js");


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/products", productRoute);



mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
