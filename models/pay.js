const { Schema, model } = require('mongoose');

const paySchema = Schema({
    user: {
        type: String,
        unique: false
    },
    method: {
        type: Number,
        unique: false,
    },
    details: {
        type: String,
        unique: false
    }
})

module.exports = model('Pays', paySchema)