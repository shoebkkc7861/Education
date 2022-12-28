const userRole = require("../controllers/userRole")

const express = require("express")
const router = express.Router()

router.post("/addUserRole", userRole.addUserRole)

module.exports = router