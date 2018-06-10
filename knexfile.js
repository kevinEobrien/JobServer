module.exports = {

  development: {
    client: "pg",
    connection: "postgres:///jobhunter"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },
};