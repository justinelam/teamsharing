var express = require('express');
var mysql = require('mysql');

var app = express();

//Application Settings

app.use(express.static('public'));

//Configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'teamsharing'
});
// connection.connect();
//Setting Routes

app.get('/', function(req, res){
	// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	//   if (err) throw err;
	//   console.log('The solution is: ', rows[0].solution);
	// });
	//
	// connection.end();
	// res.render('index', {title: "My Title", message: "Goodbye world!"});
	res.sendFile(__dirname+'/index.html');

});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Your app listening at http://%s:%s', host, port);
});
