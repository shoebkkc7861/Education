const express = require("express")
const router = express.Router()
const assignment = require("../controllers/studentAssignment")
const auth = require("../middleware/authentication/user")


router.post("/add", auth, assignment.addFiles)
router.get("/get", auth, assignment.getFile)

module.exports = router