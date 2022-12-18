const mongoose = require('mongoose');

const MomentSchema = new mongoose.Schema(
  {
    numberOfPerson: Number,
  },
  { timestamps: true }
);

const Moment = mongoose.model('Moment', MomentSchema);

module.exports = { Moment };
