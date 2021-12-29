var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, '/Views'));

app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World');

});
    

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send('ok'); 
});

app.listen(80);