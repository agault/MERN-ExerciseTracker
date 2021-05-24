const mongoose = require('mongoose');//require('mongoose')

const Schema = mongoose.Schema;//all mongoose schema start same. 

const exerciseSchema = new Schema({//validations
    username:{type:String, required: true },
    description:{type:String, required: true },
    duration:{type:Number, required: true },
    date:{type:Date, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;