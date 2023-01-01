const user = require("../controllers/user")
const validate = require("../middleware/joiValidate/user")
const auth = require("../middleware/authentication/user")
const { errorhandler } = require("../middleware/errorhandling")
require("express-async-errors")

const express = require("express")
const router = express.Router()

router.post("/addUser", validate, user.addUser)
router.post("/login", user.login)
router.get("/getUsers", auth, user.getUsers)
router.get("/getUser", auth, user.getUser)
router.delete("/deleteUser", auth, user.deleteUser)
router.post("/forget", user.forget)
router.put("/forget/:id/:token", user.verify)

router.use(errorhandler)

module.exports = router