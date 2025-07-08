const mongoose = require('mongoose');

const NeighborhoodSchema = new mongoose.Schema({
  name: String,
  safety: Number,
  affordability: Number,
  commute: Number,
  noise: Number,
  internet: Number,
  petFriendly: Boolean,
  description: String,
  images: [String]
});

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema);
