const express = require("express")
const router = express.Router();

const adminCntl = require("../controllers/admin.controller");

router.get("/",adminCntl.getAdminMain)

module.exports = router;