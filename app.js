var express = require("express"),
  app = express(),
  mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27018/node-app")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.error(
      `Unable to establish connection to mongoDB, error: ${error.message}`
    );
  });

app.listen(3000, function () {
  console.log("our server has been started");
});
