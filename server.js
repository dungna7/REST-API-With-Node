var express = require('express'),
	mongoose = require('mongoose')
	fs = require('fs')
var app = express()
var mongoUri = 'mongodb://localhost/moderest'
mongoose.connect(mongoUri)
var db = mongoose.connection
db.on('error', function (){
	throw new Error('unable')
})
app.configure(function(){
	app.use(express.bodyParser())
})
require('./models/musician')
require('./routes')(app);

app.listen(3001);
console.log("Jammin\' on port 3001...");