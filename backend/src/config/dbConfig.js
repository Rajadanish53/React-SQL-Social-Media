module.exports = {
  HOST: "sql6.freesqldatabase.com",
  USER: "sql6511951",

  PASSWORD: "UjKICslURK",
  DB: "sql6511951",
  dialect: "mysql",
  dialectModule: require("mysql2"),

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
