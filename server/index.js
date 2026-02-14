const express = require('express');
const cors = require('cors');
require('dotenv').config();  
const connectDB = require('./config/db');  
const aiRoutes = require('./service/aiService');  
const deepfakeRoutes = require('./service/deepfakeVerify');
const dataUploadRoutes = require('./service/dataUpload');

const app = express();

app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();                         

// Your existing route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.use('/api/ai', aiRoutes); 
app.use('/api/deepfake', deepfakeRoutes);
app.use('/api/upload', dataUploadRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});