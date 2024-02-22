const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require("body-parser");


const productsRoute = require('./routes/productRoute')

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce',{}).then(()=>{console.log("DB connected")}).catch((err)=>{
    console.log(err)
})

app.listen(5000, console.log("Server running on port 5000"));


app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("API is running");
});

