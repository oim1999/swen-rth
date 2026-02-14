const express = require('express');
const cors = require('cors');
require('dotenv').config();          // ← add this
const connectDB = require('./db');    // ← add this

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();                          // ← add this

// Your existing route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from MERN backend! 🚀' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});