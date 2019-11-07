const Sequelize = require("sequelize");

module.exports = new Sequelize("todonode", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres"
});
