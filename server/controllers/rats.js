var mongoose = require("mongoose")
var Rat = mongoose.model("Rat")

module.exports = {
	get_all_rats: function(req, res){
		Rat.find({}, function(err, data){
			if(err){
				console.log("Rat find error", err)
				res.json(err)
			} else {
				res.json(data)
			}
		})
	},
	create: function(req, res){
		console.log(req.body)
		var new_rat = new Rat(req.body)
		new_rat.save(function(err){
			if(err){
				console.log("Rat create error", err)
				res.json({added: false, error: err})
			} else {
				res.json({added: true})
			}
		})
	},
	delete: function(req, res){
		Rat.remove({_id: req.params.id}, function(err){
			if(err){
				console.log("Rat delete error", err)
			}
			res.json(true)
		})
	}
}
