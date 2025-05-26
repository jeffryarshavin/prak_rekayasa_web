const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/mahasiswa');
const authenticateToken = require('../middleware/auth');

router.get('/',authenticateToken, async (req, res) => {
  const data = await Mahasiswa.findAll();
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await Mahasiswa.create(req.body);
  res.json(data);
});

router.put('/:id', async (req, res) => {
  await Mahasiswa.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Updated' });
});

router.delete('/:id', async (req, res) => {
  await Mahasiswa.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
});

module.exports = router;
