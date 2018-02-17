var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./words-angular/dist")));
app.use(express.static(path.join(__dirname, "./node_modules")));

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app);

http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.on('connection', (socket) => {
  console.log('The user is connected.');
  socket.on('disconnect', function(){
    console.log('The user is disconnected.');
  });
  socket.on('add-message', (word, creator, createdAt) => {
   io.emit('message', {type:'new-message', word: word, creator: creator, createdAt: createdAt});
 });
});

server.listen(PORT, function(){
  console.log('listening on port '+PORT)
})

// Files to look at:
// server/config/routes.js
// server/config/mongoose.js
// both package.json's
// proxy.conf.json
// word.service.ts
//
// For localhost vs. website host, and website running power.
