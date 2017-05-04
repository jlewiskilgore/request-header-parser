var express = require('express')
var app = express();

app.get('/', function(req, res) {
	res.send(
		'Request Header Parser'
	);
});

app.listen(process.env.PORT || 8080, function() {
	console.log("Server Listening on Port 8080");
})