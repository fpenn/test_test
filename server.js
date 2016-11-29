var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
//var pg = require('pg');
var Sequelize = require('sequelize');
//var session = require('express-session');


var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));



app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



//Connecting with database

/*
var sequelize = new Sequelize('blog_app', 'postgres', null, {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		underscored: true,
		timestamps: false
	}
}); 
*/



//var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/blog_app';



// Routes

app.get('/', function(request, response) {

	//var message = request.query.message;
	//console.log(message);
	
		response.render('home');
	});








	var server = app.listen(3000);
