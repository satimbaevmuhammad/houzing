const express = require('express');
const router = express.Router();
const House = require('../models/House');

// Barcha uylarni olish
router.get('/', async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yangi uy qo‘shish
router.post('/', async (req, res) => {
  try {
    const newHouse = new House(req.body);
    const savedHouse = await newHouse.save();
    res.status(201).json(savedHouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Bitta uyni olish
router.get('/:id', async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) return res.status(404).json({ message: 'Uy topilmadi' });
    res.json(house);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yangilash
router.put('/:id', async (req, res) => {
  try {
    const updated = await House.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// O‘chirish
router.delete('/:id', async (req, res) => {
  try {
    await House.findByIdAndDelete(req.params.id);
    res.json({ message: 'Uy o‘chirildi' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
