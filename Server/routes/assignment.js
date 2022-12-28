const Assignment = require("../controllers/assignment")
const express = require("express")
const router = express.Router()
const validate = require("../middleware/joiValidate/assignment")
const auth = require("../middleware/authentication/user")

router.post("/", auth, validate, Assignment.add)
router.get("/", auth, Assignment.get)
router.put("/:id", auth, Assignment.update)
router.delete("/:id", auth, Assignment.delete)


module.exports = router