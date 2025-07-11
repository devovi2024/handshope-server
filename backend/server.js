import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
console.log("PORT from .env:", process.env.PORT);

app.use(express.json());
app.use("/api/auth", authRoutes);

// Connect DB first, then start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/api/auth`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error.message);
  }
};

startServer();
