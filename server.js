
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/practica2.html', function (req, res) {
   res.sendFile( __dirname + "/" + "practica2.html" );
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("http://localhost:3000/practica2.html")

});