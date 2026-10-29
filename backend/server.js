require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));
app.get("/api/health", (req,res) => res.json({success:true,message:"MediStore API is running",database:mongoose.connection.readyState===1?"connected":"disconnected"}));
app.use("/api/medicines", require("./routes/medicines"));
app.use("/api/batches", require("./routes/batches"));
app.use("/api/stock-movements", require("./routes/stockMovements"));
app.use("/api/dashboard", require("./routes/dashboard"));
async function start(){if(!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing in backend/.env"); await mongoose.connect(process.env.MONGODB_URI); console.log("Connected to MongoDB Atlas"); app.listen(PORT,()=>console.log(`MediStore is running at http://localhost:${PORT}`));}
start().catch(e=>{console.error("Startup failed:",e.message);process.exit(1);});
