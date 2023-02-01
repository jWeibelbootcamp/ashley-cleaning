const { Schema, model } = require('mongoose');
bcrypt = require('bcrypt');

const Email = new Schema({
	address: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  validated: {type: Boolean, default: true}
});

const ClientSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  email: {
    type: Email,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

ClientSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

ClientSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const Client = model('Client', ClientSchema);

module.exports = Client;
