const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
