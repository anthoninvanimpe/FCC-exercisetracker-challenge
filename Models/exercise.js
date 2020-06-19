
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    description: {type: String, required: true},
    date: {type:Date, default: Date.now},
    duration: Number,
    userId: {type:mongoose.ObjectId, required: true, ref: "User"}

});

module.exports = mongoose.model('Exercise', exerciseSchema);
