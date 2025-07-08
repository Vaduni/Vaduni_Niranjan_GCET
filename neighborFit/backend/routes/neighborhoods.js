const express = require('express');
const router = express.Router();
const Neighborhood = require('../models/Neighborhood');

//  POST route
router.post('/', async (req, res) => {
  console.log("✅ POST /api/neighborhoods hit");

  try {
    const newNeighborhood = new Neighborhood(req.body);
    await newNeighborhood.save();
    res.status(201).json(newNeighborhood);
  } catch (error) {
    console.error(" Error in POST:", error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// GET route
router.get('/', async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find();
    res.json(neighborhoods);
  } catch (error) {
    console.error(" Error in GET:", error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
