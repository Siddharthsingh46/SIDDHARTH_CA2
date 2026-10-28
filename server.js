const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const app = express();


app.use(express.json());


app.use("/api/books", bookRoutes);


app.get("/", (req, res) => {
    res.send("Library Book Management API is running");
});


const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully ");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error.message);
        //process.exit(1);
    }
}

startServer();




