// const mongoose = require('mongoose');

// const DB_URL = process.env.DB_URL;

// mongoose.connect(DB_URL)
//     .then(() => {
//         console.log('MongoDB is Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Conn Error...', err);
//     })

require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB Connected Successfully to:", MONGODB_URI))
.catch((err) => console.log("MongoDB Connection Error:", err));

// Handle connection events
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
