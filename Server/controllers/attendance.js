const { Attendance } = require("../models/attendance")

attandanceObj = {}

attandanceObj.addAttend = async (req, res) => {
    const { error, data } = await Attendance.addAttend(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

attandanceObj.findPer = async (req, res) => {
    const { error, data } = await Attendance.findPer(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 403
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

attandanceObj.findOverAll = async (req, res) => {
    const { error, data } = await Attendance.findOverAll(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 403
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = attandanceObj