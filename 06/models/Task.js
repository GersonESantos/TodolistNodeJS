const moongoose = require('mongoose');

const taskSchema = new moongoose.Schema({
    task: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});
module.exports = moongoose.model('Task', taskSchema);