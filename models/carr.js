const { Schema, model } = require('mongoose');

const reviewSchema = schema({
    user: {
        type: String,
        unique: true
    },
    products: {
        type: String,
        unique: false,
    },
    total: {
        type: Number,
        unique: true
    }
})

module.exports = model('carr', carrSchema)