import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/property");
    console.log("db connection success");
  } catch (error) {
    console.log("db connection failed", error.message);
  }
};

export default connectDB;
