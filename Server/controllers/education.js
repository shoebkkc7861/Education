const education = require("../models/education")

const eduObj = {};

eduObj.addEducation = async (req, res) => {
    let { data, error } = await education.addEducation(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.message = error.message ? error.message : 402
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}
eduObj.getEdycation = async (req, res) => {
    let { data, error } = await education.get().catch((err) => { return { error: err } })
    if (error) {
        error.message = error.message ? error.message : 404
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}



eduObj.update = async (req, res) => {
    let { data, error } = await education.update(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


eduObj.delete = async (req, res) => {
    let { data, error } = await education.remove(req.params.id).catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}

module.exports = eduObj