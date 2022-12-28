const Students = require("../schemas/student")
const Users = require("../schemas/user")
const Class = require("../schemas/class")
const { Op } = require("sequelize")

async function addStudent(params, params2) {
    let findClass = await Class.findOne({ where: { id: params.classId } }).catch(() => { return false })
    if (!findClass) {
        return { error: { status: 404, message: "cant find class" } }
    }


    let check = await Users.findAll({
        where: {
            id: {
                [Op.in]: [params.studentId]
            }
        }
    }).catch(() => { return false })
    if (!check) {
        return { error: { status: 400, message: "cant find user" } }
    }


    let arr = []

    for (let i of params.studentId) {
        arr.push({
            studentId: i,
            classId: params.classId,
            createdby: params2
        })
    }


    let student = await Students.bulkCreate(arr).catch((err) => { return { error: err } })
    if (student.error) {
        return { error: { status: 500, message: student.error.message } }
    }
    return { data: student }
}



async function getStudents() {
    let student = await Students.findAll({ attributes: ["rollNo", "studentName"] }).catch((err) => { return { error: err } })
    if (student.error || !student) {
        return { error: { status: 404, message: student.error.message || "data not found" } }
    }
    return { data: student }
}



async function getStudent(param) {

    let classData = await Class.findOne({ where: { id: param.classId } })

    if (!classData || classData == null) {
        return { error: { status: 400, message: "cant find class" } }
    }

    let studentData = await Students.findAll({ where: { classId: param.classId }, raw: true, attributes: ["studentId"] }).catch((err) => { return { error: err } })

    if (!studentData || studentData.error) {
        return { error: { status: 400, message: "cant find all" } }
    }

    return { data: studentData }
}




async function update(param1, param2) {
    let find = await Students.findOne({ where: { id: param2 } }).catch(() => {
        return false
    })

    if (find === null || !find) {
        return { error: { status: 400, message: "cannot find student" } }
    }

    let classStudentData = await Students.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (classStudentData.error || !classStudentData) {
        return { error: { status: 400, message: classStudentData.error.message || "cant update data" } }
    }

    return { data: classStudentData }
}

async function remove(param) {
    let classStudentData = await Students.destroy({ where: { id: param } }).catch((err) => { return { error: err } })
    if (classStudentData.error || classStudentData === null || !classStudentData) {
        return { error: { status: 400, message: classStudentData.error.message || "cant delete" } }
    }

    return { data: classStudentData }

}



module.exports = {
    student: {
        addStudent,
        getStudent,
        getStudents,
        update,
        remove
    }
}