var express = require('express')
var app = express();

app.get('/', function(req, res) {
	var userIP = null;
	var userLanguage = null;
	var userOS = null;

	var result = {
		"ipAddress": userIP,
		"language": userLanguage,
		"operatingSystem": userOS
	};

	res.json(result);
});

app.listen(process.env.PORT || 8080, function() {
	console.log("Server Listening on Port 8080");
})