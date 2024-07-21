const { Schema, model } = require('mongoose');

const reservaSchema = Schema({
    user: {
        type: String,
        require: true,
        unique: true
    },
    date: {
        type: Date,
        require: true
    },
    guests: {
        type: Number,
        require: true
    },
    specialRequest: {
        type: String,
        require: false
    }
})

module.exports = model('Reserva', reservaSchema)