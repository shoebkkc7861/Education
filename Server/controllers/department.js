const Department = require("../models/department")

deptObj = {}

deptObj.addDepartment = async (req, res) => {
    let { data, error } = await Department.obj.add(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = (error.status) ? error.status : 500
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = deptObj