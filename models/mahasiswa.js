const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mahasiswa = sequelize.define('Mahasiswa', {
  nama: DataTypes.STRING,
  nim: DataTypes.STRING,
  jurusan: DataTypes.STRING
});
module.exports = Mahasiswa;
