const mongoose = require('mongoose')

/*
name (string)
email (string)
phone (string)
*/
const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', usersSchema)

module.exports = User