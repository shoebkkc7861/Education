const student = require('../controllers/student')
const express = require("express")
const router = express.Router()

router.post("/addstudent", student.addStudent)
router.get("/getStudents", student.getStudents)

router.put("/:id", student.update)
router.delete("/:id", student.delete)


module.exports = router