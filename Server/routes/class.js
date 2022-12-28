const Class = require("../controllers/class")
const express = require("express")
const router = express.Router()
const adminAuth = require("../middleware/authentication/admin")
const validate = require("../middleware/joiValidate/class")


router.post("/addClass", adminAuth, validate, Class.addClass)
router.get("/getClass", adminAuth, Class.getClass)
router.put("/update/:id", adminAuth, Class.updateClass)
router.delete("/:id", Class.delete)

module.exports = router
