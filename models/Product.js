const { Schema, model } = require ('mongoose')

const productSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    }
})

module.exports =  model ('Product', productSchema)
