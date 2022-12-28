const { monthlyFees } = require("../models/monthlyFees")

const feesObj = {}

feesObj.addFees = async (req, res) => {
    const { error, data } = await monthlyFees.addFees(req.body).catch((err) => { return { error: err } })

    if (error) {
        error.status = error.status ? error.status : 403
        return res.status(403).send(error.message)
    }
    return res.status(201).send(data)
}

feesObj.getAll = async (req, res) => {
    const { error, data } = await monthlyFees.getAll().catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 404
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = feesObj