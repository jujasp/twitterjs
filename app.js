const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks=require('nunjucks');


app.set('view engine', 'html');
app.engine('html',nunjucks.render);
nunjucks.configure('views', { noCache: true});

// app.get('/', function(req, res, next) {
// 	console.log(req.path, req.method, res.statusCode); //extra credit!
// 	res.send('yay');
// });

app.get('/', function(req, res) {
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	return res.render('index', {title: 'twitter.js', people: people})
});

//-----------------------------------------------

app.use(morgan('dev'));

app.listen(3000, function(){
	console.log('server running');
});

app.use('/special', function(req, res, next){
	console.log('this is special');
	next();

});

app.get('/news', function(req, res, next) {
	res.send('news');
});
