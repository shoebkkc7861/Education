const { Roles, role } = require("../models/role")

const roleObj = {}

roleObj.addRole = async (req, res) => {
    let { error, data } = await role.addRole(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

roleObj.getRoles = async (req, res) => {
    let { error, data } = await role.getRoles(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

module.exports = roleObj