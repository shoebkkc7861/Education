const dept = require("../controllers/department")
const express = require("express")
const router = express.Router()

router.post("/add", dept.addDepartment)

module.exports = router