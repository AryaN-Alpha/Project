// routes/auth.js
const express = require('express');
const Credentials = require('../models/user'); // Update with the correct path
const router = express.Router();

// POST route for signup
router.post('/signup', async (req, res) => {
  const { Name, Email, Password } = req.body;

  // Simple validation
  if (!Name || !Email || !Password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    // Check if user already exists
    const userExists = await Credentials.findOne({ Email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (you should hash the password before saving in production)
    const newUser = new Credentials({ Name, Email, Password }); // Save the password as is (not secure)
    await newUser.save();
  
    // Return success response
    res.status(201).json({ message: 'User created successfully', user: newUser });
    console.log("Signup Successfull")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route for login
router.post('/login', async (req, res) => {
  const { Email, Password } = req.body;

  // Simple validation
  if (!Email || !Password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    // Check if user exists
    const user = await Credentials.findOne({ Email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password directly (not secure; use hashing in production)
    if (Password !== user.Password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return success response (you can add JWT token here if needed)
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
