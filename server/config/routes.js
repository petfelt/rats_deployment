var rats = require("./../controllers/rats.js")

module.exports = function(app){
	app.get("/rats", rats.get_all_rats)
	app.post("/create", rats.create)
	app.delete("/delete/:id", rats.delete)
}
