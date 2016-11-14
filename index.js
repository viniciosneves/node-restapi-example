var express = require('express');
var app = express();

app.listen(3001, function(){
  console.log('server listening on port 3001.');
});

app.get('/test', function(req, res){
  console.log('test req on port 3001.')
  res.send('OK.');
});
