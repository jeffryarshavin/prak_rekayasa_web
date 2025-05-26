// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('db_sekolah', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });
// module.exports = sequelize;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
});
