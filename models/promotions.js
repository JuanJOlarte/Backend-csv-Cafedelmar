const { Schema, model } = require('mongoose');

const promotionsSchema = schema({
    code: {
        type: String,
        unique: flase
    },
    discount: {
        type: String,
        unique: false,
    },
    description: {
        type: String,
        unique: true
    },
    valid: {
        type: Number,
        unique: true
    }
})

module.exports = model('pay', paySchema)