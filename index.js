var app = require('./configs/custom-express.js')();

app.listen(3001, function(){
  console.log('server listening on port 3001.');
});
