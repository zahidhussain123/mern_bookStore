import mongoose from "mongoose"


const userModel = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "book"
    }]
})

const user = mongoose.model("user", userModel);

export default user