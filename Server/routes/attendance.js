const Attendance = require("../controllers/attendance")
const express = require("express")
const router = express.Router()

router.post("/addAttend", Attendance.addAttend)
router.get("/findPer", Attendance.findPer)
router.get("/findOverAll", Attendance.findOverAll)

module.exports = router