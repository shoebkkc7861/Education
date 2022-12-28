const Assignment = require("../schemas/assignment")
const Subject = require("../schemas/subject")
const Class = require("../schemas/class")

async function add(param) {

    let findClass = await Class.findOne({ where: { id: param.classId } }).catch(() => { return false })
    if (!findClass) {
        return { error: { status: 404, message: "cant find class" } }
    }
    let findSub = await Subject.findOne({ where: { id: param.subjectId } }).catch(() => { return false })
    if (!findSub) {
        return { error: { status: 404, message: "cant find  subject" } }
    }
    let assigementData = await Assignment.create(param).catch((err) => { return { error: err } })
    // console.log(assigementData)
    if (!assigementData || (assigementData && assigementData.error.message)) {
        return { error: { status: 400, message: assigementData.error.message || "cant create" } }
    }

    return { data: assigementData }
}


async function get() {

    let assigementData = await Assignment.findAll().catch((err) => { return { error: err } })
    if (assigementData.error || assigementData === null || !assigementData) {
        return { error: { status: 400, message: assigementData.error.message || "cant load data" } }
    }

    return { data: assigementData }

}

async function update(param1, param2) {
    let assigementData = await Assignment.update(param1, { id: param2 }).catch((err) => { return { error: err } })
    console.log(assigementData);
    if (!assigementData || assigementData === null || assigementData.error) {
        return { error: { status: 400, message: assigementData.error.message || "cant update data" } }
    }

    return { data: assigementData }
}

async function remove(param) {

    let assigementData = await Assignment.destroy({ id: param }).catch((err) => { return { error: err } })
    if (!assigementData || assigementData === null) {
        return { error: { status: 400, message: assigementData.error || "cant delete" } }
    }

    return { data: assigementData }

}
module.exports = {
    add,
    get,
    update,
    remove
}