const { Fees } = require("../models/fees")

const feesObj = {}

feesObj.addFees = async (req, res) => {
    const { error, data } = await Fees.addFees(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)

}

feesObj.getFees = async (req, res) => {
    const { error, data } = await Fees.getFees(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 404
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)

}

module.exports = feesObj