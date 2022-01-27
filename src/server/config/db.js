const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log(`MongoDB Connected: ${res.connection.host}`));
  //   console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
