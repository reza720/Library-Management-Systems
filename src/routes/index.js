const express = require("express");
const router = express.Router();

const MemberRoutes = require("./memberRoutes");
const BookRoutes = require("./bookRoutes");
const IssuedBookRoutes = require("./issuedBookRoutes");

router.use("/members", MemberRoutes);
router.use("/books", BookRoutes);
router.use("/issued-books", IssuedBookRoutes);

module.exports = router;
