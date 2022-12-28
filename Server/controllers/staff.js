const { staff } = require("../models/staff")

staffObj = {}

staffObj.addStaff = async (req, res) => {
    const { error, data } = await staff.addStaff(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}




staffObj.get = async (req, res) => {
    let { data, error } = await staff.get().catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }
    //let get = await course.get()
    return res.header("token", data).status(200).send(data)
}


staffObj.delete = async (req, res) => {
    let { data, error } = await staff.remove(req).catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }
    //let get = await course.get()
    return res.status(200).send(data)
}

staffObj.update = async (req, res) => {
    let { data, error } = await staff.update(req.body, req.params.id).catch((err) => { return { error: err } })
    if (error) {
        return res.status(error.status).send(error.message)
    }
    //let get = await course.get()
    return res.status(200).send(data)
}




module.exports = staffObj