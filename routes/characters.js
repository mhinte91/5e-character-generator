const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Character = require('../models/Character');

// @route       GET api/characters
// @desc        Get all user's characters
// @access      Private
router.get('/', auth, async (req, res) => {
  // Pull from database
  try {
    // Finds character by specific user matching req.user.is, and sorts by newest first
    const characters = await Character.find({ user: req.user.id }).sort({
      date: -1
    });
    // Returns all characters
    res.json(characters);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route       POST api/characters
// @desc        Add new character
// @access      Private
router.post(
  '/',
  // Runs middleware and checks that name field is not empty
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    // Checks for validation erros
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Pull out data from the body
    const { name, race, heroClass, bio, stats } = req.body;
  }
);

// @route       PUT api/characters/:id
// @desc        Update a user's character
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update a users character');
});

// @route       DELETE api/characters/:id
// @desc        Delete a character
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete a character');
});

module.exports = router;
