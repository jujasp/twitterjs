const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks=require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); //gives the extension for the engine
app.engine('html',nunjucks.render);// gives the extension the file to be rendered.
nunjucks.configure('views', { noCache: true});// set the psth for t
app.use(morgan('dev'));
app.use('/', routes);

// app.get('/', function(req, res, next) {
// 	console.log(req.path, req.method, res.statusCode); //extra credit!
// 	res.send('yay');
// });

//-----------------------------------------------



app.listen(3000, function(){
	console.log('server running');
});

// app.use('/special', function(req, res, next){
// 	console.log('this is special');
// 	next();

// });
