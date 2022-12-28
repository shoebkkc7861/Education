const Users = require("../schemas/user")
const Qualification = require("../schemas/qualification")



async function addQualification(params) {
    let findUser = await Users.findOne({ where: { id: params.userId } }).catch(() => { return false })

    if (!findUser) {
        return { error: { status: 405, message: "id not found" } }
    }


    let qualificationData = await Qualification.create(params).catch((err) => { return { error: err } })
    if (qualificationData.error) {
        return { error: { status: 403, message: qualificationData.error.message } }
    }
    return { data: qualificationData }
}

async function getQualification() {
    let getQualifications = await Qualification.findAll().catch((err) => { return false })
    if (!getQualifications) {
        return { error: { status: 404, message: "not found" } }
    }
    return { data: getQualifications }
}

module.exports = {
    Qualification,
    qualification: {
        addQualification,
        getQualification
    }
}