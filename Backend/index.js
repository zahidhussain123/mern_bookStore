import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 4000
const BASEURL = process.env.URL

try {
    mongoose.connect(BASEURL)
    console.log("DB is connected")
} catch (error) {
    console.log("DB not connected")
}

// app.get("/", (req, res) => {
//     res.send("first app")
// })

app.use("/book", bookRoute )
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`)
})