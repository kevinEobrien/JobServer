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

app.get("/job", (request, response, next) => {
  queries.listJobs().then(customers => {
    response.status(201).json({customers});
  }).catch(next);
});
  
app.get("/job/:id", (request, response, next) => {
  queries.readJob(request.params.id)
    .then(customer => {
      customer
        ? response.status(201).json({customer})
        : response.sendStatus(404);
    }).catch(next);
});
  
app.post("/job", (request, response, next) => {
  queries.createJob(request.body).then(() => {
    response.status(201).json("Job added!");
  }).catch(next);
});
  
app.delete("/job/:id", (request, response, next) => {
  queries.deleteJob(request.params.id).then(() => {
    response.status(201).json("Job Deleted");
  }).catch(next);
});
  
app.put("/job/:id", (request, response, next) => {
  queries.updateCustomer(request.params.id, request.body).then(() => {
    response.status(201).json("Your job has been updated!");
  }).catch(next);
});

app.get("/customer", (request, response, next) => {
  queries.listCustomers().then(customers => {
    response.status(201).json({customers});
  }).catch(next);
});
  
app.get("/customer/:id", (request, response, next) => {
  queries.readCustomer(request.params.id)
    .then(customer => {
      customer
        ? response.status(201).json({customer})
        : response.sendStatus(404);
    }).catch(next);
});
  
app.post("/customer", (request, response, next) => {
  queries.createCustomer(request.body).then(() => {
    response.status(201).json("Welcome!");
  }).catch(next);
});
  
app.delete("/customer/:id", (request, response, next) => {
  queries.deleteCustomer(request.params.id).then(() => {
    response.status(201).json("Sorry to see you leave. Come back any time");
  }).catch(next);
});
  
app.put("/customer/:id", (request, response, next) => {
  queries.updateCustomer(request.params.id, request.body).then(() => {
    response.status(201).json("Your profile has been updated!");
  }).catch(next);
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