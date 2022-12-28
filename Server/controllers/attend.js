const { attend } = require("../models/attend")

attandObj = {}

attandObj.addAttend = async (req, res) => {
    const { error, data } = await attend.addAttend(req.body)
    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

module.exports = attandObj