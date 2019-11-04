const express = require('express');
const router = express.Router();

// @route       GET api/characters
// @desc        Get all user's characters
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all users characters');
});

// @route       POST api/characters
// @desc        Add new character
// @access      Private
router.post('/', (req, res) => {
  res.send('Add new character');
});

// @route       PUT api/characters/:id
// @desc        Update a user's character
// @access      Private
router.get('/:id', (req, res) => {
  res.send('Update a users character');
});

// @route       DELETE api/characters/:id
// @desc        Delete a character
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete a character');
});

module.exports = router;
