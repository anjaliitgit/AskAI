import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// =========================
// Test Routes
// =========================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AskAI Backend API is running."
    });
});

app.get("/hello", (req, res) => {
    res.json({
        success: true,
        message: "Hello from AskAI!"
    });
});

app.get("/routes-test", (req, res) => {
    res.json({
        success: true,
        message: "Latest server.js is running!"
    });
});

// =========================
// API Routes
// =========================

app.use("/api", chatRoutes);

console.log("✅ Chat routes loaded");

// =========================
// Custom 404 Handler
// =========================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        path: req.originalUrl,
        message: "Route not found in Express"
    });
});

// =========================
// Database Connection
// =========================

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected with Database!");
    } catch (err) {
        console.error("❌ Failed to connect with DB:", err);
    }
};

// =========================
// Start Server
// =========================

app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    await connectDB();
});

