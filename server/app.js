var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');
var compression = require('compression');
var morgan = require ('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes.js')

app.use(express.static('public'));

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(compression());
app.use(morgan('tiny'));

//routes
app.use('/', routes);

module.exports = app;
module.exports.port = port;