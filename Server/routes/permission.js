const permission = require("../controllers/permission")

const express = require("express")
const router = express.Router()

router.post("/addPermission", permission.addPermission)
router.get("/getPermissions", permission.getPermissions)

module.exports = router