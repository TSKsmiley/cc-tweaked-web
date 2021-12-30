var express = require('express');
var path = require('path');
var items = require('./itemsExample.json');

var app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'Views'));

app.use(express.json());


app.get('/', function(req, res){
    res.render('Index.pug', {items: items});
});
    

app.post('/Update', function(request, response){
  items = request.body;
   response.send('ok'); 
});

console.log("Server is running on port: " + process.env.PORT);
app.listen(process.env.PORT);