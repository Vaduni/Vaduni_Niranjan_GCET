const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: [
    'https://neighborfit-omega.vercel.app',
    'https://neighborfit-git-main-vaduni-niranjans-projects-32a1dc87.vercel.app'
  ]
}));

app.use(express.json());

// Routes
app.use('/api/neighborhoods', require('./routes/neighborhoods'));


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
