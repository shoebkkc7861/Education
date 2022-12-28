const details = require("../controllers/details")
const auth = require("../middleware/authentication/admin")
const addValidate = require("../middleware/joiValidate/details")

const express = require("express")
const router = express.Router()

router.post("/addData", addValidate, details.addData)
router.put("/updateData/:id", details.updateData)
router.get("/", details.get)
router.delete("/:id", details.delete)


module.exports = router