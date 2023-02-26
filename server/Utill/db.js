const { Sequelize } = require("sequelize");
const db = new Sequelize("newyapi", "root", "19032008", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
