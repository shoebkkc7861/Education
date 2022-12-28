const exp = require("../controllers/experience")
const validate = require("../middleware/joiValidate/experience")

const express = require("express")
const rout = express.Router()

rout.post("/add", validate, exp.addExp)
rout.get("/", exp.get)
rout.put("/:id", exp.update)
rout.delete("/:id", exp.delete)

module.exports = rout