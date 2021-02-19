const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type:String
    }
})

const BookDB = mongoose.model("BookDB",  bookSchema)
module.exports = BookDB