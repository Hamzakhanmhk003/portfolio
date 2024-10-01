const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfoliodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect', err));

// Define the Message schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model
const Message = mongoose.model('Message', messageSchema);

// Fetch all messages
Message.find()
  .then(messages => {
    console.log('Messages:', messages);
    mongoose.connection.close(); // Close the connection when done
  })
  .catch(err => {
    console.error('Error fetching messages', err);
  });
