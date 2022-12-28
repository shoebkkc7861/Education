const Experience = require("../schemas/experience")
const Users = require("../schemas/user")

async function addExperience(param) {


    let verify = await Users.findOne({ where: { id: param.userId } }).catch((err) => {
        return { error: err }
    })
    if (!verify || verify.error) {
        return { error: { status: 400, message: verify.error.message || "cant registor" } }
    }



    let arr = []

    for (let i in param.Experience) {
        arr.push({
            UsersId: param.UserId,
            title: param.Experience[i].title,
            employmentType: param.Experience[i].employmentType,
            companyName: param.Experience[i].companyName,
            location: param.Experience[i].location,
            startDate: param.Experience[i].startDate,
            endDate: param.Experience[i].endDate,
            industry: param.Experience[i].industry,
            description: param.Experience[i].description

        })
    }

    let expData = await Experience.bulkCreate(arr).catch((err) => { return { error: err } })

    if (expData.error || !expData) {
        return { error: { status: 400, message: expData.error.message } }
    }

    return { data: expData }

}



async function get() {

    let expData = await Experience.findAll().catch((err) => { return { error: err } })
    if (expData.error || leaveData === null || expData) {
        return { error: { status: 400, message: expData.error.message || "cant load data" } }
    }

    return { data: expData }

}

async function update(param1, param2) {
    letexpData = await Experience.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (expData.error || expData === null || expData) {
        return { error: { status: 400, message: expData.error.message || "cant update data" } }
    }

    return { data: leaveData }
}

async function remove(param) {
    let expData = await Experience.destroy({ where: { id: param } }).catch((err) => { return { error: err } })
    if (expData.error || expData === null || expData) {
        return { error: { status: 400, message: expData.error.message || "cant delete" } }
    }

    return { data: expData }

}



module.exports = {
    exp: {
        addExperience,
        get,
        update,
        remove
    },
    Experience
}