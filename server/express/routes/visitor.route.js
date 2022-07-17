const express = require("express")
const router = express.Router();

const visitorCntl = require("../controllers/visitor.controller");

router.get("/",visitorCntl.getVisitorMain)

module.exports = router;