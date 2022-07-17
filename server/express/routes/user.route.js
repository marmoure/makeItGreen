const express = require("express")
const router = express.Router();

const userCntl = require("../controllers/user.controller");

router.get("/",userCntl.getUserMain)

module.exports = router;