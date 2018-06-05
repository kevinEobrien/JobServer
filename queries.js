const database = require("./database-connection");


module.exports = {
  listJobs(){
    return database("job");
  },
  readJob(id){
    return database("job").where("id", id).first();
  },
  createJob(customer){
    return database("job").insert(customer).returning("*").then(record => record[0]);
  },
  deleteJob(id){
    return database("job").delete().where("id", id);
  },
  updateJob(id, customer){
    return database("job").update(customer).where("id", id).returning("*").then(record => record[0]);
  },
  listCustomers(){
    return database("customer");
  },
  readCustomer(id){
    return database("customer").where("id", id).first();
  },
  createCustomer(customer){
    return database("customer").insert(customer).returning("*").then(record => record[0]);
  },
  deleteCustomer(id){
    return database("customer").delete().where("id", id);
  },
  updateCustomer(id, customer){
    return database("customer").update(customer).where("id", id).returning("*").then(record => record[0]);
  }
};