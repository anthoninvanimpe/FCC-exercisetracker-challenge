const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/user');

app.post('/api/exercise/new-user', function(req,res){
  var newUser = new User({username:req.body.username});
  
  res.json({username:req.body.username, _id:req.body.id});
  
  
});

module.exports = routes;
