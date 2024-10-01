const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfoliodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Create a Mongoose schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

// Define an endpoint to handle form submissions
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true, msg: 'Message saved successfully' });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'Error saving message' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
