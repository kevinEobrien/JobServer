require ("dotenv").load();
const express = require("express");
const cors = require("cors");
const database= require("./database-connection");
const bodyParser= require("body-parser");
const queries = require("./queries");
const app= express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response, next) => {
  response.json({
    message: "Testing out the job board server"
  });
});

app.use((request, response, next) => {
  var err= new Error("Not found");
  response.status(404);
  next(err);
});
  
app.use((err, request, response, next) => {
  response.status(response.statusCode || 500);
  response.json({
    message: err.message,
    stack: request.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports= app;