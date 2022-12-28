const Education = require("../schemas/education")
const Users = require("../schemas/user")


async function addEducation(params) {

    let find = await Users.findOne({ where: { id: params.userId } }).catch((err) => { return { error: err } })

    if (find == null || find.error) {
        return { error: { status: 400, message: find.error.message || "unregistored user" } }
    }
    array = []

    for (let i in params.rows) {
        array.push({
            userId: params.userId,
            qualification: params.rows[i].qualification,
            institute: params.rows[i].institute,
            organisation: params.rows[i].organisation,
            avarageMarks: params.rows[i].avarageMarks,
            totalMarks: params.rows[i].totalMarks
        })
    }


    let eduData = await Education.bulkCreate(array).catch((err) => { return { error: err } })
    if (eduData.error) {
        return { error: { status: 400, message: eduData.error.message || "cant add data" } }
    }
    return { data: eduData }
}

async function getEducation() {
    let eduData = await Education.findAll().catch((err) => { return false })
    if (!eduData) {
        return { error: { status: 400, message: "cant add data" } }
    }
    return { data: eduData }
}



async function update(param1, param2) {
    let educationData = await Education.update(param1, { where: { id: param2 } }).catch((err) => { return { error: err } })
    if (educationData.error || educationData === null || educationData) {
        return { error: { status: 400, message: educationData.error.message || "cant update data" } }
    }

    return { data: educationData }
}

async function remove(param) {
    let educationData = await Education.destroy({ where: { id: param } }).catch((err) => { return { error: err } })
    if (educationData.error || educationData === null || educationData) {
        return { error: { status: 400, message: educationData.error.message || "cant delete" } }
    }

    return { data: educationData }

}

module.exports = {
    addEducation,
    getEducation,
    remove,
    update
}