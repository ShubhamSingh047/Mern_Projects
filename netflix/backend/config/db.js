import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Mongo DB connected: " + conn.connection.host);
  } catch (err) {
    console.log("error " + err.message);
    process.exit(1);
  }
};
