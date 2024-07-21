const { Schema, model } = require('mongoose');

const reviewSchema = schema({
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

module.exports = model('pay', paySchema)