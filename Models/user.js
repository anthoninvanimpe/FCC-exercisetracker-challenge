
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type: String, required: true},
    creation_date: Date,
    exercises:{type: mongoose.ObjectId, ref:"Exercise"}
});

module.exports = mongoose.model('User', userSchema);
