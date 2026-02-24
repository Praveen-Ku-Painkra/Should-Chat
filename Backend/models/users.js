const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  createdAt: { type: Date, default: Date.now, required: true },
  firstName: { type: String, required: true },
  proImg: {
    type: String,
    default: "",
  },
  lastName: { type: String },
  number: { type: Number,unique:true, required: true },
  email: { type: String,unique:true, required: true },
});

const User = model("user",userSchema);

module.exports = User