const MonthlyFees = require("../schemas/monthlyFees")
const Fees = require("../schemas/fees")
const { Op } = require("sequelize")


async function addFees(params) {
    const fees = await Fees.findAll({
        where: {
            paidAt: {
                [Op.between]: [params.startDate, params.endDate]
            }
        }, raw: true
    }).catch(() => { return false })
    if (!fees) {
        return {
            error: { status: 404, message: "not found" }
        }
    }

    let totalFees = 0

    for (let i of fees) {
        totalFees = totalFees + i.feesPaid
    }


    let monthlyFees = await MonthlyFees.create({ startDate: params.startDate, endDate: params.endDate, totalFees: totalFees }).catch((err) => { return { error: err } })
    if (monthlyFees.error || !monthlyFees) {
        return { error: { status: 401, message: monthlyFees.error.message } }
    }

    return { data: monthlyFees }
}

async function getAll() {
    const fees = await MonthlyFees.findAll().catch((err) => { return { error: err } })
    if (!fees) {
        return { error: { status: 404, message: "not found" } }
    }
    return { data: fees }
}


module.exports = {
    MonthlyFees,
    monthlyFees: {
        addFees,
        getAll
    }
}