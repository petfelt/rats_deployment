var mongoose = require("mongoose")

var WordSchema =  new mongoose.Schema({
  word: String,
  creator: String,
}, {timestamps: true})

mongoose.model("Word", WordSchema)
