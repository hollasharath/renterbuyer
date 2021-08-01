const express = require('express')
const app = express();
var mongoose = require('mongoose'); 					// mongoose for mongodb
var database = require('./config/database'); 			// load the database config
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
mongoose.connect(database.url);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});