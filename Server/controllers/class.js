const { classs, Class } = require("../models/class")

classObj = {}

classObj.addClass = async (req, res) => {
    const { error, data } = await classs.addClass(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}


classObj.getClass = async (req, res) => {
    const { error, data } = await classs.getClass(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 404
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

classObj.updateClass = async (req, res) => {
    const { error, data } = await classs.updateClass(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 404
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

classObj.delete = async (req, res) => {
    let { data, error } = await classs.remove(req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = error.status ? error.status : 500

        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)

}

module.exports = classObj