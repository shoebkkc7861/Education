const Attend = require("../controllers/attend")
const express = require("express")
const router = express.Router()

router.post("/addAttend", Attend.addAttend)

module.exports = router