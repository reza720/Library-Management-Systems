const express = require("express");
const router = express.Router();
const {BookController} = require("../controllers");
const BookValidation=require("../middlewares/validations/bookValidation");

router.post("/",BookValidation.rules,BookValidation.errorHandler,BookController.createBook);
router.get("/",BookController.getAllBooks);
router.get("/:id",BookController.getBookById);
router.put("/:id",BookValidation.rules,BookValidation.errorHandler,BookController.updateBook);
router.delete("/:id",BookController.deleteBook);

module.exports = router;
