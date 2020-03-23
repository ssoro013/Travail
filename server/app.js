var express = require('express');
var app = express();
var port = 5000;
var cors = require('cors');
var compression = require('compression');
var morgan = require ('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes.js');
var path = require('path');

app.use(express.static('public'));

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(compression());
app.use(morgan('tiny'));

//routes
app.use('/', routes);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


module.exports = app;
module.exports.port = port;