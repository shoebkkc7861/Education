
const upload = require('../middleware/multer/assignment')
const StudentAssignment = require("../schemas/studentAssignment")
const jwt = require("jsonwebtoken")
const usersRoles = require("../schemas/userRole")

async function addfiles(params, res) {
    let file = await upload(params, res, 'files').catch((err) => { return console.log(err) })

    const files = []

    for (let i of file) {
        files.push(i.path)
    }

    let token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)

    let studentAssignment = await StudentAssignment.create({
        assignmentId: params.body.assignmentId,
        subjectId: params.body.subjectId,
        answer: params.body.answer,
        url: files,
        createdBy: check.id,
        updatedBy: check.id
    }).catch((err) => { return { error: err } })

    if (studentAssignment.error) {
        return { error: { status: 500, message: studentAssignment.error.message } }
    }

    return { data: studentAssignment }
}


async function find(params) {


    let token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)

    let userRole = await usersRoles.findOne({ where: { userId: check.id, roleId: 1 } }).catch(() => { return false; })

    let file;

    if (userRole) {
        file = await StudentAssignment.findAll().catch(() => { return false })
        if (!file) {
            return { error: { message: "not found" } }
        }
    } else {
        file = await StudentAssignment.findAll({ where: { createdBy: check.id } }).catch(() => { return false })
        if (!file) {
            return { error: { message: "your assigment list is empty" } }
        }
    }



    return { data: file }
}


module.exports = {
    studentAssignment: {
        addfiles,
        find
    }
}