const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/user');

app.post('/api/new-user', function(req,res){
  var newUser = new User({username:req.body.username});
  
  
  
});
