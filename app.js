require('dotenv').config();

//async errors

const express = require("express");
const app = express();  
const mongoose = require("mongoose");


//middlewares
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-found");
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send('<h1>Store API</h1><a href = "/api/v1/products">Products route </a>');
});

//port set up .../
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app.listen(port,   console.log(`Server is listening on port ${port}`));
    } 
    catch (error) {
        console.error(error);  
    }
}