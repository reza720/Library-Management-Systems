const express = require("express");
const router = express.Router();
const { MemberController } = require("../controllers");

router.post("/", (req, res) => MemberController.addMember(req, res));
router.get("/", (req, res) => MemberController.getAllMembers(req, res));
router.get("/:id", (req, res) => MemberController.getMemberById(req, res));
router.put("/:id", (req, res) => MemberController.updateMember(req, res));
router.delete("/:id", (req, res) => MemberController.deleteMember(req, res));

module.exports = router;
