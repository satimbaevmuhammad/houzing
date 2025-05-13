const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Barcha foydalanuvchilarni olish
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Yangi foydalanuvchi qo‘shish
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Bitta foydalanuvchini olish
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Topilmadi' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yangilash
router.put('/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// O‘chirish
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'O‘chirildi' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
