const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

let poolConfig = {
  max: dbConfig.pool.max,
  min: dbConfig.pool.min,
  acquire: dbConfig.pool.acquire,
  idle: dbConfig.pool.idle,
}


const sequelize =new Sequelize(dbConfig.URI, {
operatorsAliases: false,
pool: poolConfig,});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.images = require("./image.model.js")(sequelize, Sequelize);

module.exports = db;
