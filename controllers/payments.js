module.exports = function (app) {

    app.get('/payments', function(req, res){
      console.log('test req on port 3001.')
      res.send('OK.');
    });

}
