var express = require('express');
var app = express();
var PORT = 3000;

/*app.get('/', function (req, res) {
	// req - request obtained
	// res - response to be sent
	res.send('Hello Express!');
})*/

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		//var date = new Date().toString();
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

/*app.use(middleware.requireAuthentication);

app.get('/about', function (req, res) {
	res.send('About us!');
})*/

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
})

/*console.log(__dirname);
this gives:
C:\cygwin64\home\VijayBhargavKongari\node-course\web-server*/

app.use(express.static(__dirname + '/public'));

//app.listen(3000);
app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});