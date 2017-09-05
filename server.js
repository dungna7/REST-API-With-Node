var express = require('express'),
	mongoose = require('mongoose')
	fs = require('fs')
var app = express()
require('./models/musician')
require('./routes')(app);

var mongoUri = 'mongodb://localhost/moderest'
mongoose.connect(mongoUri)
var db = mongoose.connection
db.on('error', function (){
	throw new Error('unable')
})
app.configure(function(){
	app.use(express.bodyParser())
})

app.listen(3001);
console.log("Jammin\' on port 3001...");