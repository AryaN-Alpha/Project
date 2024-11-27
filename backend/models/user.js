const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const credentialsSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  Password: { // Corrected the typo here
    type: String,
    required: true
  }
});

// Export the model
module.exports = mongoose.model('Credentials', credentialsSchema);
