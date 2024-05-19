import BookModel from "../models/book.js"
import user from "../models/user.model.js";

export const getBook = async (req, res) => {
    const id = req.params.id
    console.log(req.params)
    console.log(id)
 
    try {
        const books = await BookModel.find();
        // const book = await user.findById(id).populate("books");
        // if (!book) {
        //     return res.status(404).json({ message: "User not found" });
        // }
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const postBook = async (req, res) => {
    const {  title, name, price, category, image } = req.body;
    console.log(req.body)
    
    try {
        const addBook = await BookModel.create({
            title,
            name, 
            price, 
            category, 
            image,
        })
        await addBook.save()
    //    const findUser  = await user.findById(userId)
    //    await findUser.books.push(addBook._id)
    //    await findUser.save()
       res.status(200).json({message: "Book added successfully", addBook})
    } catch (error) {
      res.status(500).json({message: error})
    }
}