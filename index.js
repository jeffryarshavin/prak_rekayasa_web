const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const mahasiswaRoutes = require('./routes/mahasiswa');
const User = require('./models/user');
const Mahasiswa = require('./models/mahasiswa');
const authRoutes = require('./routes/auth');
// const mahasiswaRoutes = require('./routes/mahasiswa');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server berjalan di http://localhost:5000');
  });
});
