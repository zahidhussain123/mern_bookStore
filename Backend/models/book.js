import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: Number,
    category: {
        type: String,
        required: true
    },
    image: String,
})

const BookModel = mongoose.model("book", bookSchema)

export default BookModel