const Fees = require("../controllers/fees")
const express = require("express")
const router = express.Router()

router.post("/addFees", Fees.addFees)
router.get("/getFees", Fees.getFees)

module.exports = router