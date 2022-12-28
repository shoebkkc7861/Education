const Qualification = require('../controllers/qualification')
const auth = require("../middleware/authentication/user")

const express = require("express")
const router = express.Router()

router.post("/addQualification", auth, Qualification.addQualification)
router.get("/getQualification", Qualification.getQualification)

module.exports = router