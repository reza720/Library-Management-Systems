const express=require("express");
const router=express.Router();
const {IssuedBookController}=require("../controllers");

router.post("/",IssuedBookController.createIssueBook);
router.get("/",IssuedBookController.getAllIssuedBooks);
router.get("/:id",IssuedBookController.getIssuedBookById);
router.put("/return/:id",IssuedBookController.updateIssuedBook);
router.delete("/:id",IssuedBookController.deleteIssuedBook);

module.exports=router;
