
const mongoose = require('mongoose');
const User = require('../Models/user');

app.post('/api/exercise/new-user', function(req,res){
  var newUser = new User(req.body);
  
   function createUser(done){
    newUser.save({username:req.body.username}, function(err, data){
      if(err) console.error(err);
      done(null, data);
    });
   }
  res.json({username:req.body.username, _id:req.body.id});
  
  
});

module.exports = routes;
