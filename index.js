
require('dotenv').config()
const express = require("express");
const cors = require("cors");
 
const app = express();
const port = process.env.WEBSERVER_PORT;
const apiRouter = require('./routes/route.js');


// console.log(process.env.DATABASE_PORT)
// Middleware 
app.use(cors());
app.use(express.json());

app.use('/api',apiRouter);

app.get("/", function (req, res) {
  res.send("Main Page");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
