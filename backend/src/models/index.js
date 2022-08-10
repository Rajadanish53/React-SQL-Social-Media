const { default: Sequelize } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectModule: require("mysql2"),
  operatorsAliases: false,
  port: 3306,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
  } /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

sequelize
  .authenticate()
  .then((e) => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("error " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./productModel.js")(sequelize);
db.reviews = require("./reviewModel.js")(sequelize);
db.user = require("./userModel.js")(sequelize);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re sync done");
});

module.exports = db;
