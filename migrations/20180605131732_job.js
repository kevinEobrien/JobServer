exports.up = function(knex, Promise) {
  return knex.schema.createTable("job", (table) => {
    table.increments();
    table.integer("customer_id").notNullable();
    table.text("company");
    table.text("title");
    table.text("location");
    table.text("salary");
    table.text("URL");
    table.text("notes");
    table.dateTime("deadline");
    table.dateTime("applied");
    table.dateTime("interview1");
    table.dateTime("interview2");
    table.text("offer");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("job");
};
