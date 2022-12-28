const leave = require("../controllers/leave")
const express = require("express")
const router = express.Router()


router.post("/add", leave.add)
router.post("/authenticate", leave.auth)
router.get("/get", leave.get)
router.delete("/:id", leave.delete)
router.put("/:id", leave.update)

module.exports = router