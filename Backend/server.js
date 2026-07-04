import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());

// ======================
// API Routes
// ======================
app.use("/api", chatRoutes);

// ======================
// Health Check Route
// ======================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "AskAI Backend API is running 🚀"
    });
});

// ======================
// 404 Route
// ======================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// ======================
// Database Connection
// ======================
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB connected successfully");
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1);
    }
};

// ======================
// Start Server
// ======================
app.listen(PORT, async () => {
    await connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
});

