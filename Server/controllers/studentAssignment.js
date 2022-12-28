
const upload = require('../middleware/multer/assignment')
const StudentAssignment = require("../schemas/studentAssignment")
const jwt = require("jsonwebtoken")
const { studentAssignment } = require("../models/studentAssignment")

obj = {}


obj.addFiles = async (req, res) => {
    const { error, data } = await studentAssignment.addfiles(req).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

obj.getFile = async (req, res) => {
    const { error, data } = await studentAssignment.find(req).catch((err) => { return { error: err } })
    if (error) {
        return res.status(404).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = obj
