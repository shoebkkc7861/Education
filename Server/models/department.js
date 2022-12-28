const Department = require("../schemas/department")

async function addDepartment(param) {

    let deptData = await Department.create(param).catch((err) => { return { error: err } })
    if (deptData.error || deptData === null || !deptData) {
        return { error: { status: 400, message: deptData.error.message || "registration unsuccesfull" } }
    }

    return { data: deptData }
}

module.exports = {
    obj: {
        addDepartment,
    },
    Department
}