var words = require("./../controllers/words.js")

module.exports = function(app){
	app.get("/words", words.get_all_words)
	app.post("/create", words.create)
	app.delete("/delete/:id", words.delete)
	app.delete("/clear", words.clear)
}
