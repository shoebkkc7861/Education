const role = require("../controllers/role")
const auth = require("../middleware/authentication/user")

const express = require("express")
const router = express.Router()


router.post("/addRole", role.addRole)
router.get("/getRoles", auth, role.getRoles)

module.exports = router