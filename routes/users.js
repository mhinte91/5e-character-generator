const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post(
  '/',
  // Check to see that fields are appropriately filled
  [
    check('name', 'Please enter your name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with six or more characters'
    ).isLength({
      min: 6
    })
  ],
  // Asynchronous function that first checks for the error validation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Destructures name, email, and password from the request object
    const { name, email, password } = req.body;

    try {
      // If no errors, tries to find the user by the provided email
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // If no user is found, a new User model is created with name, email, and password
      user = new User({
        name,
        email,
        password
      });

      // Hashes the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Saves a new user to the database
      await user.save();

      res.send('User saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
