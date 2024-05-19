import express from "express";
import { getBook, postBook } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/addBook", postBook);

export default router