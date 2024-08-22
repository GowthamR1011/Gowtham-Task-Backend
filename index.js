const express = require("express");
const app = express();
const port = 3000;
const router = require('./routes/route.js');



// Middleware 
app.use(express.json());

app.use('/',router);

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
