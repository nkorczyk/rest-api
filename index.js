const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use("/api", routes);

// listen for requests
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("now listening for requests");
});
