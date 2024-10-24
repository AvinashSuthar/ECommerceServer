const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;