const rolePer = require("../schemas/rolePer")

async function getRolePer(params) {
    let rolePer = await rolePer.findAll({ attributes: ["name", "id"] }).catch((err) => { return { error: err } })
    if (rolePer.error) {
        return { error: { status: 404, message: "data not found" } }
    }
    return { data: rolePer }
}



async function update(param) {
    let rolePermissionData = await rolePer.findAll({ where: { roleId: param.roleId } }).catch((err) => { return { error: err } })
    if (rolePermissionData == null || rolePermissionData.error) {
        return { error: { status: 400, message: rolePermissionData.error.message || "cant find" } }
    }
    let remove = await rolePer.destroy({ where: { roleId: param.roleId } }).catch((err) => { return { error: err } })

    if (remove === null || remove.error || !remove) {
        return { error: { status: 400, message: remove.error.message || "cant delete" } }
    }

    let array = []
    for (let i in param.permission) {
        array.push({
            role_id: param.role_id,
            permission: param.permission[i]
        })
    }

    let create = await rolePer.bulkCreate(array).catch((err) => { return { error: err } })
    if (create.error || create === null || !create) {
        return { error: { status: 400, message: create.error.message || "cant update" } }
    }

    return { data: create }

}

module.exports = {
    rolePer,
    RolePer: {
        getRolePer,
        update
    }
}