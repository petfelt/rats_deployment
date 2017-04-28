var mongoose = require("mongoose")
var Word = mongoose.model("Word")

module.exports = {
	get_all_words: function(req, res){
		Word.find({}, function(err, data){
			if(err){
				console.log("Word find error", err)
				res.json(err)
			} else {
				res.json(data)
			}
		})
	},
	create: function(req, res){
		console.log(req.body)
		var new_word = new Word(req.body)
		new_word.save(function(err){
			if(err){
				console.log("Word create error", err)
				res.json({added: false, error: err})
			} else {
				res.json({added: true})
			}
		})
	},
	delete: function(req, res){
		Word.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("Word delete error", err)
			}
			res.json(true)
		})
	},
	clear: function(req, res){
		Word.remove({}, function(err){
			if(err){
				console.log("Could not clear story", err)
			}
			res.json(true)
		})
	},
}
