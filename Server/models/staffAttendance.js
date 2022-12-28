const StaffAttendance = require("../schemas/staffAttendance")


async function addAttend(params) {
    let array = []
    for (let i in params.StaffAttendance) {
        array.push({
            staffId: params.StaffAttendance[i].staffId,
            isPresent: params.StaffAttendance[i].isPresent,
            date: params.date
        })
    }

    let attend = await StaffAttendance.bulkCreate(array).catch((err) => { return { error: err } })
    if (attend.error) {
        return { error: { status: 500, message: attend.error.message } }
    }

    return { data: attend }
}

// async function get

module.exports = {
    staffAttendance: {
        addAttend
    },
    StaffAttendance
}