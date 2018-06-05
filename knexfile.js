module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/jobhunter"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },
};