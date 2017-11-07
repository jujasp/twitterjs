const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan')


app.listen(3000, function(){
	console.log('server running');
});

app.use(morgan());

app.get('/', function(req, res, next) {
	console.log(req.path, req.method, res.statusCode); //extra credit!
	res.send('yay');
});

app.get('/news', function(req, res, next) {
	res.send('news');
});
