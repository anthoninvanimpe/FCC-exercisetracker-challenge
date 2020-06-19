
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type: String, required: true},
    creation_date: new Date(),
    exercises:{type: [mongoose.Schema.Types.ObjectId], ref:"Exercise"}
});


userSchema.index({username : 1}, {unique:true});

module.exports = mongoose.model('User', userSchema);
