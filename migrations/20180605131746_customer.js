exports.up = function(knex, Promise) {
  return knex.schema.createTable("customer", (table) => {
    table.increments();
    table.text("username").notNullable();
    table.text("password");
    table.text("name");
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("customer");
};