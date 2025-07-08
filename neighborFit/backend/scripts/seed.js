const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Neighborhood = require('../models/Neighborhood');
const neighborhoods = require('../data/neighborhoods.json');

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Neighborhood.deleteMany();
    console.log('Old data cleared');

    await Neighborhood.insertMany(neighborhoods);
    console.log('Neighborhoods inserted from JSON');

    process.exit();
  } catch (error) {
    console.error(' Error seeding:', error);
    process.exit(1);
  }
}

seedDatabase();
