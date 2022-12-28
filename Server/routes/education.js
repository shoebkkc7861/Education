const education = require("../controllers/education")
const validate = require("../middleware/joiValidate/education")

const express = require("express")
const router = express.Router()


router.post("/addEducation", validate, education.addEducation)
router.get("/getEducation", education.getEdycation)
router.put("/:id", education.update)
router.delete("/:id", education.delete)

module.exports = router