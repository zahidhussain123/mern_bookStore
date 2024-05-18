import BookModel from "../models/book.js"


export const getBook = async (req, res) => {
    try {
        const book = await BookModel.find();
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(err)
    }
}