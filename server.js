var express = require('express')
var app = express();

app.get('/', function(req, res) {
	var userIP = req.ip;
	var userLanguage = req.headers['accept-language'].split(',')[0];
	var userOS = req.headers['user-agent'].split('(')[1].split(')')[0];

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