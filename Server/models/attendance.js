const Attendance = require("../schemas/attendance")
const { Op } = require("sequelize")



async function addAttend(params) {
    let array = []
    for (let i in params.Attendance) {
        array.push({
            subjectId: params.subjectId,
            createdById: params.createdById,
            rollNo: params.Attendance[i].rollNo,
            isPresent: params.Attendance[i].isPresent,
            date: params.date
        })
    }

    let attend = await Attendance.bulkCreate(array).catch((err) => { return { error: err } })
    if (attend.error) {
        return { error: { status: 500, message: attend.error.message } }
    }

    return { data: attend }
}

async function findPer(params) {
    const find = await Attendance.findAndCountAll({
        where: {
            date: {
                [Op.between]: [params.startDate, params.endDate]
            },
            subjectId: params.subjectId,
            rollNo: params.rollNo
        }, raw: true
    }).catch(() => { return false })

    if (!find) {
        return { error: { status: 404, message: "not found" } }
    }

    const findCount = find.count

    const findPres = await Attendance.findAndCountAll({
        where: {
            date: {
                [Op.between]: [params.startDate, params.endDate]
            },
            subjectId: params.subjectId,
            rollNo: params.rollNo,
            isPresent: 1
        }, raw: true
    })
    if (!findPres) {
        findPres == 0
    }
    const findPresCount = findPres.count

    const percentage = (findPresCount / findCount) * 100


    return { data: ` percentage of your attandance is ${percentage} from ${params.startDate} to ${params.endDate}` }
}



async function findOverAll(params) {
    const find = await Attendance.findAndCountAll({
        where: {
            date: {
                [Op.between]: [params.startDate, params.endDate]
            },
            rollNo: params.rollNo
        }, raw: true
    }).catch(() => { return false })

    if (!find) {
        return { error: { status: 404, message: "not found" } }
    }

    const findCount = find.count

    const findPres = await Attendance.findAndCountAll({
        where: {
            date: {
                [Op.between]: [params.startDate, params.endDate]
            },
            rollNo: params.rollNo,
            isPresent: 1
        }, raw: true
    })
    if (!findPres) {
        findPres == 0
    }
    const findPresCount = findPres.count

    const percentage = (findPresCount / findCount) * 100



    return { data: ` percentage of your attandance is ${percentage} from ${params.startDate} to ${params.endDate}` }
}




module.exports = {
    Attendance: {
        addAttend,
        findPer,
        findOverAll
    }
}