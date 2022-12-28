const express = require('express')
const router = express.Router()
const staff = require("../controllers/staff")
const validate = require("../middleware/joiValidate/staff")

router.post("/addStaff", validate, staff.addStaff)
router.get("/get", staff.get)
router.put("/update", staff.update)
router.delete("/delete", staff.delete)

module.exports = router