const joi = require("joi")
const emailVerify = require("../middleware/mail/mailer")
const Users = require("../schemas/user")
const Class = require("../schemas/class")
const Announce = require("../schemas/announce")



async function add(param) {
    let announceData = await Announce.create(param).catch((err) => { return { error: err } })

    if (!announceData | (announceData && announceData.error)) {
        return { error: { status: 400, message: announceData.error.message || "cant create " } }
    }

    if (param.emailOption == true) {
        let find = await Class.findAll({ where: { courseId: param.classId }, attributes: ["studentId"], raw: true }).catch((err) => { return { error: err } })
        if (!find | (find && find.error)) {
            return { error: { status: 400, message: find.error.message | "cant find" } }
        }

        let datArray = []
        // }).catch((err) => { return { error: err } })
        for (let j of find) {
            let email = await Users.findOne({ where: { id: j.studentId }, attributes: ["emailId"], raw: true })
            datArray.push(email.email_id)
        }
        for (let i of datArray) {
            // worker.on("message", (i) => {
            //         console.log("mail sent")
            //     })
            emailVerify(param.title, param.description, i)
        }
    }
    return { data: announceData }
}

async function get(param = {}) {
    if (param == {}) {
        var announceData = await Announce.findOne({ where: { id: param.id } }).catch((err) => { return { error: err } })
    } else {
        var announceData = await Announce.findAll().catch((err) => { return { error: err } })
    }

    if (!announceData | (announceData && announceData.error)) {
        return { error: { status: 400, message: announceData.error.message | "cant find " } }
    }

    return { data: announceData }
}

async function update(param1, param2) {

    let announceData = await Announce.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })

    if (!announceData || (announceData && announceData.error)) {
        return { error: { status: 400, message: announceData.error.message } }
    }

    return { data: announceData }
}

async function remove(param) {
    let announceData = await Announce.destroy({ where: { id: param } }).catch((err) => { return { error: err } })

    if (!announceData || (announceData && announceData.error)) {
        return { error: { status: 400, message: announceData.error.message | "cant delete" } }
    }

    return { data: announceData }
}


module.exports = {
    announce: {
        add,
        get,
        update,
        remove
    }
}