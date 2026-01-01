const express = require("express");
const router = express.Router();
const { BookController } = require("../controllers");

router.post("/", (req, res) => BookController.addBook(req, res));
router.get("/", (req, res) => BookController.getAllBooks(req, res));
router.get("/:id", (req, res) => BookController.getBookById(req, res));
router.put("/:id", (req, res) => BookController.updateBook(req, res));
router.delete("/:id", (req, res) => BookController.deleteBook(req, res));

module.exports = router;
