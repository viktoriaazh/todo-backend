const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    ddate: { type: Date, required: true },
    }, {
    timestamps: true,
    });
    
    const Todo = mongoose.model('Exercise', todoSchema);
    
    module.exports = Todo;
