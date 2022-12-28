const Attendance = require("../controllers/staffAttendance")
const express = require("express")
const router = express.Router()

router.post("/addAttend", Attendance.addAttend)

module.exports = router