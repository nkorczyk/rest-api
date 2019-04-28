const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use("/api", routes);

// error handling middleware
app.use((err, req, res, next) => {
  // console.log(err);
  res.status(422).send({error: err.message});
});

// listen for requests
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("now listening for requests");
});
