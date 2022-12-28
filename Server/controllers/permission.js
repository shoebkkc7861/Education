const { Permissions, permission } = require("../models/permissions")

const permissionObj = {}

permissionObj.addPermission = async (req, res) => {
    let { error, data } = await permission.addPermission(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

permissionObj.getPermissions = async (req, res) => {
    let { error, data } = await permission.getPermissions(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

module.exports = permissionObj