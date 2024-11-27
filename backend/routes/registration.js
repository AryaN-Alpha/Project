const express = require('express');
const Registration = require('../models/registration'); // Your Registration model
const router = express.Router();

// POST route for user registration (make sure it's POST)
router.post('/register', async (req, res) => {
  const { name, email, className } = req.body;

  // Validation: Make sure all fields are provided
  if (!name || !email || !className) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    // Create a new registration record
    const newRegistration = new Registration({ name, email, className });
    await newRegistration.save();

    // Send success response
    res.status(201).json({ message: 'Registration successful!', data: newRegistration });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
