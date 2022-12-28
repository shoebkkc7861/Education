const { staffAttendance } = require("../models/staffAttendance")

attandanceObj = {}

attandanceObj.addAttend = async (req, res) => {
    const { error, data } = await staffAttendance.addAttend(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

module.exports = attandanceObj