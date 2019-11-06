const mongoose = require('mongoose');

const StatsSchema = mongoose.Schema({
  strength: { type: Number, required: true },
  dexterity: { type: Number, required: true },
  constitution: { type: Number, required: true },
  intelligence: { type: Number, required: true },
  wisdom: { type: Number, required: true },
  charisma: { type: Number, required: true },
  hitpoints: { type: Number },
  experience: { type: Number }
});

const CharacterSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  heroClass: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  stats: [StatsSchema]
});

module.exports = mongoose.model('character', CharacterSchema);
