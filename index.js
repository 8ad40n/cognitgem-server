require("dotenv").config();
const express = require('express');
const connectDB = require("./src/config/db");
const app = express()
const port = 6000

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

