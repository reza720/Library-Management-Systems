const express = require("express");
const router = express.Router();
const { IssuedBookController } = require("../controllers");

router.post("/", (req, res) => IssuedBookController.issueBook(req, res));
router.get("/", (req, res) => IssuedBookController.getAllIssuedBooks(req, res));
router.get("/:id", (req, res) => IssuedBookController.getIssuedBookById(req, res));
router.put("/return/:id", (req, res) => IssuedBookController.returnBook(req, res));
router.delete("/:id", (req, res) => IssuedBookController.deleteIssuedBook(req, res));

module.exports = router;
