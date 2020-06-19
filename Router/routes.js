
const mongoose = require('mongoose');
const User = require('../Models/user');
const Exercise = require('../Models/exercise');

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


app.post('/api/exercise/add', function(req, res){
    
  var newExercise = new Exercise(req.body);
  

});





module.exports = routes;
