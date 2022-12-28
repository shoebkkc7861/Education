const Staff = require("../schemas/staff")
const Users = require("../schemas/user")


async function addStaff(params) {
    let check = await Users.findOne({ where: { id: params.userId } }).catch((err) => { return { error: err } })
    if (!check || (check && check.error)) {
        return ({ error: { status: 400, message: check.error.message || "invalid user" } })
    }


    const staff = await Staff.create(params).catch((err) => { return { error: err } })
    if (staff.error) {
        return { error: { status: 500, message: staff.error.message } }
    }
    return { data: staff }
}




async function get() {

    let staffdata = await Staff.findAll().catch((err) => { return { error: err } })
    if (staffdata.error || staffdata === null || !staffdata) {
        return { error: { status: 400, message: staffdata.error.message || "cant load data" } }
    }

    return { data: staffdata }

}

async function update(param1, param2) {
    let staffdata = await Staff.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (staffdata.error || staffdata === null || !staffdata) {
        return { error: { status: 400, message: staffdata.error.message || "cant update data" } }
    }

    return { data: staffdata }
}

async function remove(params) {

    let token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)


    let staffdata = await Staff.destroy({ where: { id: check.id } }).catch((err) => { return { error: err } })
    if (staffdata.error || staffdata === null || !staffdata) {
        return { error: { status: 400, message: staffdata.error.message || "cant delete" } }
    }

    return { data: staffdata }

}


module.exports = {
    staff: {
        addStaff,
        get,
        update,
        remove
    },
    Staff
}