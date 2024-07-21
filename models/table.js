const { Schema, model } = require('mongoose');

const tableSchema = Schema({
    numberTable: {
        type: Number,
        require: flase,
        unique: false
    },
    shairs: {
        type: Number,
        require: true,
        unique: false
    },
    state: {
        type: String,
        require: true,
        unique: true
    },
})

module.exports = model('table', tableSchema)