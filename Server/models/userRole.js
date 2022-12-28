const usersRoles = require("../schemas/userRole")
const Users = require("../schemas/user")
const Roles = require("../schemas/role")



async function addUserRole(params) {
    let findUser = await Users.findOne({ where: { id: params.userId } }).catch((err) => { return false })
    if (!findUser || findUser === null) {
        return { error: { status: 404, message: "user not found" } }
    }

    for (let i in params.rolesId) {
        let findRole = await Roles.findOne({ where: { id: params.rolesId[i] } }).catch((err) => { return false })
        if (findRole === null) {
            return { error: { status: 404, message: params.rolesId[i] + "role not found . please enter valid user" } }
        }
    }

    let userRoles = []
    for (let i in params.rolesId) {
        userRoles.push({
            userId: params.userId,
            roleId: params.rolesId[i]
        })
    }
    console.log(userRoles)
    let userRole = await usersRoles.bulkCreate(userRoles).catch((err) => { return { error: err } })
    if (userRole.error) {
        return { error: { status: 500, message: userRole.error.message } }
    }
    return ({ data: userRole })

}


module.exports = {
    usersRoles,
    userRole: {
        addUserRole
    }
}