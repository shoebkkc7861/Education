const { details, Details } = require("../models/details")

detailsObj = {}

detailsObj.addData = async (req, res) => {
    let { error, data } = await details.addDetails(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

detailsObj.updateData = async (req, res) => {
    let { error, data } = await details.updateDetails(req.body, req.params.id)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send([data, "update successfull"])
}



detailsObj.get = async (req, res) => {
    let { data, error } = await details.get().catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.staus(200).send(data)
}
detailsObj.delete = async (req, res) => {
    let { data, error } = await details.remove(req.params.id).catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.staus(200).send(data)
}


module.exports = detailsObj