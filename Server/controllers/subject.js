const { subject } = require("../models/subject")

let subjectObj = {}

subjectObj.add = async (req, res) => {
    let { data, error } = await subject.add(req.body).catch((err) => {
        return { error: { error: err } }
    })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


subjectObj.get = async (req, res) => {
    let { data, error } = await subject.get().catch((err) => {
        return { error: { error: err } }
    })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


subjectObj.update = async (req, res) => {
    let { data, error } = await subject.update(req.body, req.params.id).catch((err) => {
        return { error: { error: err } }
    })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }
    console.log("bad")
    return res.status(200).send(data)
}


subjectObj.delete = async (req, res) => {
    let { data, error } = await subject.remove(req.params.id).catch((err) => {
        return { error: { error: err } }
    })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}

module.exports = subjectObj