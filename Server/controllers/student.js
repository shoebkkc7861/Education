const { student } = require("../models/student")

studentObj = {}

studentObj.addStudent = async (req, res) => {
    let { error, data } = await student.addStudent(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)

}

studentObj.getStudents = async (req, res) => {
    let { error, data } = await student.getStudents()
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)

}


studentObj.update = async (req, res) => {
    let { data, error } = await student.update(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}


studentObj.delete = async (req, res) => {
    let { data, error } = await student.remove(req.params.id).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}

studentObj.getStudent = async (req, res) => {
    let { data, error } = await student.getStudent(req.body).catch((err) => { return { error: err } })

    if (error) {
        error.status = (error.status) ? error.status : 400
        return res.status(error.status).send(error.message)
    }

    return res.status(200).send(data)
}




module.exports = studentObj