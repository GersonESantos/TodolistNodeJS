require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};
connectToDb()

app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`)
})
