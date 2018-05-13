var express = require('express')
var parser = require('body-parser')
var config = require('./config')
var routes = require('./api/routes')

var app = express();
var port = process.env.PORT || config.port;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

routes(app);
app.listen(port);
console.log('Server started on: ' + port);
