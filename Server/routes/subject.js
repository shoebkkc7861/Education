const subject = require("../controllers/subject")
const express = require("express")
const rout = express.Router()


rout.post("/", subject.add)
rout.get("/", subject.get)
rout.put("/:id", subject.update)
rout.delete("/:id", subject.delete)

module.exports = rout