const Details = require("../schemas/details")
const Users = require("../schemas/user")


async function addDetails(params) {
    let findUser = await Users.findOne({ where: { id: params.userId } }).catch(() => { return false })

    if (!findUser) {
        return { error: { status: 405, message: "id not found" } }
    }

    let DetailsData = await Details.create(params).catch((err) => { return { error: err } })
    if (DetailsData.error) {
        return { error: { status: 403, message: DetailsData.error.message } }
    }
    return { data: DetailsData }
}

async function updateDetails(params1, params2) {
    let updateDetail = await Details.update(params1, { where: { id: params2 } }).catch((err) => { return { error: err } })
    if (updateDetail.error) {
        return { error: { status: 500, message: updateDetail.error.message } }
    }
    return { data: updateDetail }
}



async function get() {

    let detailData = await Details.findAll().catch((err) => { return { error: err } })
    if (detailData.error || detailData === null || detailData) {
        return { error: { status: 400, message: detailData.error.message || "cant load data" } }
    }

    return { data: detailData }

}


async function remove(param) {
    let detailData = await Details.destroy({ where: { id: param } }).catch((err) => { return { error: err } })
    if (detailData.error || fileData === null || detailData) {
        return { error: { status: 400, message: detailData.error.message || "cant delete" } }
    }

    return { data: detailData }

}

module.exports = {
    Details,
    details: {
        addDetails,
        updateDetails,
        get,
        remove
    }
}