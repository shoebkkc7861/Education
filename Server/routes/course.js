const course = require("../controllers/course")
const adminAuth = require("../middleware/authentication/admin")


const express = require("express")
const router = express.Router()

router.post("/addCourse", adminAuth, course.addCourse)
router.get("/getCourse", course.findAll)
router.delete("/:id", course.delete)
router.put("/:id", course.update)

module.exports = router