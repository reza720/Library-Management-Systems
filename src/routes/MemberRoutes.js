const express = require("express");
const router = express.Router();
const {MemberController}=require("../controllers");
const MemberValidation=require("../middlewares/validations/memberValidation");

router.post("/",MemberValidation.rules,MemberValidation.errorHandler,MemberController.createMember);
router.get("/",MemberController.getAllMembers);
router.get("/:id",MemberController.getMemberById);
router.put("/:id",MemberValidation.rules,MemberValidation.errorHandler,MemberController.updateMember);
router.delete("/:id",MemberController.deleteMember);

module.exports = router;
