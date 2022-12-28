const express = require("express")
const router = express.Router()

const salary = require("../controllers/staffSalary")
const { validate } = require("../middleware/joiValidate/staffSalary")
const auth = require("../middleware/authentication/admin")

router.post("/addSalary", auth, validate.addvalidate, salary.addSalary)
router.get("/getSalary", auth, salary.getSalary)

module.exports = router