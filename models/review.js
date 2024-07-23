const { Schema, model } = require('mongoose');

const reviewSchema = Schema({
    user: {
        type: Number,
        unique: true
    },
    product: {
        type: String,
        unique: false
    },
    class: {
        type: String,
            unique: true
    },
    comments: {
        type: String,
        unique: true
    },

})

module.exports = model('review', reviewSchema)