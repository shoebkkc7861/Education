const Fees = require("../schemas/fees")


async function addFees(params) {
    const fees = await Fees.create(params).catch((err) => { return { error: err } })
    if (fees.error) {
        return { error: { status: 500, message: fees.error.message } }
    }
    return { data: fees }
}

async function getFees(params) {
    const fees = await Fees.findAll({
        attributes: ['id', 'feesPaid', 'paidAt'],
        where: {
            studentId: params.id
        }
    }).catch(() => { return false })
    if (!fees) {
        return { error: { status: 404, message: "data not found" } }
    }
    return { data: fees }


}





module.exports = {
    Fees: {
        addFees,
        getFees
    }
}
