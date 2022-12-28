const Roles = require("../schemas/role")
const rolePer = require("../schemas/rolePer")



async function addRole(params) {
    let role = await Roles.create({ name: params.name }).catch((err) => { return { error: err } })
    if (role.error) {
        return { error: { status: 401, message: role.error.message } }
    }
    let rolePermission = [];
    for (let i in params.permissions) {
        rolePermission.push({
            roleId: role.id,
            permissionId: params.permissions[i]
        })
    }
    console.log(rolePermission);
    let rolePers = await rolePer.bulkCreate(rolePermission).catch((err) => { return { error: err } })
    if (rolePers.error || rolePers == null || !rolePers) {
        return { error: { status: 500, message: rolePers.error.message || "bad request" } }
    }
    return { data: [role, rolePers] }

}

async function getRoles(params) {
    let role = await Roles.findAll({ attributes: ["name", "id"] }).catch((err) => { return { error: err } })
    if (role.error) {
        return { error: { status: 404, message: "data not found" } }
    }
    return { data: role }
}

module.exports = {
    Roles,
    role: {
        addRole,
        getRoles
    }
}