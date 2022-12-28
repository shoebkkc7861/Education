const Permissions = require("../schemas/permission")


async function addPermission(params) {
    let permission = await Permissions.create(params).catch((err) => { return { error: err } })
    if (permission.error) {
        return { error: { status: 402, message: permission.error.message } }
    }
    return { data: permission }
}

async function getPermissions(params) {
    let permission = await Permissions.findAll({ attributes: ["name", "id"] }).catch((err) => { return { error: err } })
    if (permission.error) {
        return { error: { status: 404, message: "data not found" } }
    }
    return { data: permission }
}

module.exports = {
    Permissions,
    permission: {
        addPermission,
        getPermissions
    }
}