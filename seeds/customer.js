exports.seed = function   (knex, Promise) {
  return knex.raw("TRUNCATE customer CASCADE")
    .then(function () {
      return knex("customer").insert([
        {
          "id": 1,
          "username": "saudikevin",
          "password": null,
          "name": "Kevin O'Brien",
        },
        {
          "id": 2,
          "username": "kjirsti",
          "password": null,
          "name": "Kjirsti O'Brien",
        },
        {
          "id": 3,
          "username": "piglacquer",
          "password": null,
          "name": "Patrick Biffle",
        },
      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE customer_id_seq RESTART WITH 4;");
    });
};