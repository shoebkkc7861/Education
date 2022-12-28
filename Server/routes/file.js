const files = require("../controllers/file")
const express = require("express")
const router = express.Router()

router.post("/addFiles", files.addFiles)

module.exports = router