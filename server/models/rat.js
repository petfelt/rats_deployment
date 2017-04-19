var mongoose = require("mongoose")

var RatSchema =  new mongoose.Schema({
  name: String,
  age: Number,
}, {timestamps: true})

mongoose.model("Rat", RatSchema)
