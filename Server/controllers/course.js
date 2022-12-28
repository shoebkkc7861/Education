const { Course, course } = require("../models/course")

courseObj = {}

courseObj.addCourse = async (req, res) => {
    let { error, data } = await course.addCourse(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

courseObj.findAll = async (req, res) => {
    let { error, data } = await course.getAll(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}



courseObj.update = async (req, res) => {
    let { data, error } = await course.update(req.body, req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


courseObj.delete = async (req, res) => {
    let { data, error } = await course.remove(req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


module.exports = courseObj