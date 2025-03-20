import mongoose from "mongoose";

const connectDB = async (uri) => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
