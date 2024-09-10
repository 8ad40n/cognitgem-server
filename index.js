require("dotenv").config();
const cors = require('cors');
const express = require('express');
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/user.route");
const generateRoutes = require("./src/routes/generate.route");
const app = express();
const port = 5000;

app.use(express.json());

// app.use(cors({
//   origin: ["http://localhost:3000"],
//   credentials: true
// }));

app.use(cors());

// connect to MongoDB:
connectDB();


// user routes
app.use("/user", userRoutes);

// generate routes
app.use("/generate", generateRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

