const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/mongoose');
const cors = require('cors'); 
const chatbotRoutes = require('./routes/chatbot');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Use the cors middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
