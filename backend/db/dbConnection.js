import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTURANT",
    })
    .then(() => console.log("✅ Database connected successfully!"))
    .catch((error) => console.error("❌ Error in DB connection:", error.message));
};
