const express = require('express');

// set up express app
const app = express();

app.get("/api", (req, res) => {
  console.log("GET request");
  res.send({name: "Yoshi"});
});

// listen for requests
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("now listening for requests");
});
