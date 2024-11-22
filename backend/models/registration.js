const mongoose = require('mongoose');

    // Define the schema for the registration form
    const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Full name is required
        trim: true,      // Remove any extra spaces
    },
    email: {
        type: String,
        required: true,  // Email is required
        unique: true,    // Email should be unique in the database
        lowercase: true, // Convert email to lowercase
        match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        'Please enter a valid email address'
        ],  // Basic email format validation
    },
    className: {
        type: String,
        required: true,  // Class name is required
        enum: ['Yoga', 'HIIT', 'Zumba', 'Pilates', 'Spin Class'],  // Only these values are allowed
    },
    }, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
    });

    // Create the model based on the schema
    const Registration = mongoose.model('Registration', registrationSchema);

    module.exports = Registration;