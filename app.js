//------------------------------------------------------------------------------
// Future Blue Web Team Project - blue-box
//------------------------------------------------------------------------------
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser')

// create a new express server
var app = express();
// var appEnv = cfenv.getAppEnv(); // get the app environment from Cloud Foundry
var port = 3000;


app.set('view engine', 'ejs'); // set ejs as the rendering engine

// Serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/****************** routes ********************************/

var index = require('./routes/index');
var plans = require('./routes/plans');
var login = require('./routes/login');
var login2 = require('./routes/login2');
var dashboard = require('./routes/dashboard');
var create = require('./routes/create');



app.use('/', index);
app.use('/plans', plans);
app.use('/login', login);
app.use('/logintwo', login2);
app.use('/dashboard', dashboard);
app.use('/create', create);



// start server
app.listen(port, function() {
  console.log("server starting on " + port);
});
