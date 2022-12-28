const fees = require("../controllers/monthlyFees")
const express = require("express")
const router = express.Router()
const validate = require("../middleware/joiValidate/monthlyFees")


router.post("/addFees", validate.add, fees.addFees)
router.get("/getFees", fees.getAll)

module.exports = router