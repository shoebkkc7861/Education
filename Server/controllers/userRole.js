const { userRole, usersRoles } = require("../models/userRole")

const userRoleObj = {}

userRoleObj.addUserRole = async (req, res) => {
    let { error, data } = await userRole.addUserRole(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}


module.exports = userRoleObj