const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    // Get user from database, omit the password, and send the user
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/auth
// @desc        Authenticate user & get token
// @access      Public
router.post(
  '/',
  // Check for appropriate input
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    // Check that there are no errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure email and password from the body
    const { email, password } = req.body;

    try {
      // Check that user exists, if not return an error
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Compares the user password to the provided password
      const isMatch = await bcrypt.compare(password, user.password);
      // If passwords don't match, return an error
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Create a payload object to send to token
      const payload = {
        user: {
          id: user.id
        }
      };

      // Sign and generate the token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          //Respond with the token, which includes the user ID
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
