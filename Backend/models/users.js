const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  createdAt: { type: Date, default: Date.now, required: true },
  firstName: { type: String, default: Date.now, required: true },
  proImg: {
    type: String,
    default: "",
  },
  lastName: { type: String },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = model("user",userSchema);

module.exports = User