const express = require("express");
const router = express.Router();

const memberRoutes = require("./MemberRoutes");
const bookRoutes = require("./BookRoutes");
const issuedBookRoutes = require("./IssuedBookRoutes");

router.use("/members", memberRoutes);
router.use("/books", bookRoutes);
router.use("/issued-books", issuedBookRoutes);

module.exports = router;
