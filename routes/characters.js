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
  async (req, res) => {
    // Checks for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Pull out data from the body
    const { name, race, heroClass, bio, stats } = req.body;

    try {
      // Creates a new character model, including the user
      const newCharacter = new Character({
        name,
        race,
        heroClass,
        bio,
        stats,
        user: req.user.id
      });

      // Saves the new character to database
      const character = await newCharacter.save();

      // Return character to client
      res.json(character);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       PUT api/characters/:id
// @desc        Update a user's character
// @access      Private
router.put('/:id', auth, async (req, res) => {
  // Pull out data from the body
  const { name, race, heroClass, bio, stats } = req.body;

  // Build character object, if these are included, add
  // to character fields
  const characterFields = {};
  if (name) characterFields.name = name;
  if (race) characterFields.race = race;
  if (heroClass) characterFields.heroClass = heroClass;
  if (bio) characterFields.bio = bio;
  if (stats) characterFields.stats = stats;

  try {
    // Finds the character by parameter ID
    let character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ msg: 'Character not found' });

    // Make sure user owns the character
    if (character.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Do the update
    character = await Character.findByIdAndUpdate(
      req.params.id,
      { $set: characterFields },
      { new: true }
    );

    res.json(character);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/characters/:id
// @desc        Delete a character
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Finds the character by parameter ID
    let character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ msg: 'Character not found' });

    // Make sure user owns the character
    if (character.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Character.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Character removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
