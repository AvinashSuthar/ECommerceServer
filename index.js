const connectDB = require("./config/connectDB");
const productRoutes = require("./routes/products");
const app = require("./server");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(express.json());

// products
app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listining at port ${process.env.PORT}`);
});
