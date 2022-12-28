const rolePer = require("../controllers/rolePer")
const adminAuth = require("../middleware/authentication/admin")

const express = require("express")
const router = express.Router()

router.get("getRolePermission", adminAuth, rolePer.getRolePer)
router.post("/update", adminAuth, rolePer.update)

module.exports = router