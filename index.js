const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;
const apiRouter = require('./routes/route.js');



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
