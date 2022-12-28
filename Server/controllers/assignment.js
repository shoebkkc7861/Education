const Assignment = require("../models/assignment")

const assignmentObj = {}

assignmentObj.add = async (req, res) => {
    let { data, error } = await Assignment.add(req.body).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


assignmentObj.get = async (req, res) => {
    let { data, error } = await Assignment.get().catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


assignmentObj.update = async (req, res) => {
    let { data, error } = await Assignment.update(req.body, req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}


assignmentObj.delete = async (req, res) => {
    let { data, error } = await Assignment.remove(req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)

}

module.exports = assignmentObj