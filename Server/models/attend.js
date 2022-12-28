const Attend = require("../schemas/attend")


async function addAttend(params) {

    let arr = []
    for (let i in params.attendance) {
        arr.push({
            attendance: params.attendance[i],
            subjectId: params.subjectId,
            createdById: params.createdById
        })

    }

    let attend = await Attend.bulkCreate(arr).catch((err) => { return { error: err } })
    if (attend.error) {
        return { error: { status: 500, message: attend.error.message } }
    }
    return { data: attend }
}

module.exports = {
    attend: {
        addAttend
    }
}