const StaffSalary = require("../schemas/staffSalary")
const Staff = require("../schemas/staff")
const StaffAttendance = require("../schemas/staffAttendance")
const { Op } = require("sequelize")
const fs = require("fs")
const jwt = require("jsonwebtoken")

async function addSalary(params) {

    let token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)

    const staff = await Staff.findOne({ where: { id: params.body.staffId } }).catch(() => { return false })
    if (!staff) {
        return { error: { status: 404, message: "id not found" } }
    }

    const attCount = await StaffAttendance.findAndCountAll({
        where: {
            staffId: params.body.staffId, ispresent: false, date: {
                [Op.between]: [params.body.startDate, params.body.endDate]
            }
        }, raw: true
    }).catch((err) => { return { error: err } })
    if (attCount.error || !attCount) {
        return { error: { status: 404, message: attCount.error.message || "count not found" } }
    }
    // console.log(attCount)

    const salary = staff.salary
    const absent = attCount.count
    const currentSalary = ((salary) - ((salary / 30) * absent))
    const deductedSalary = (salary - currentSalary)
    const medicalAllowance = (4 / 100 * deductedSalary)
    const providentFund = (10 / 100 * deductedSalary)
    const professionalTax = (2 / 100 * deductedSalary)


    const details = {
        currentSalary: currentSalary,
        deductedSalary: deductedSalary,
        medicalAllowance: medicalAllowance,
        providentFund: providentFund,
        professionalTax: professionalTax,
    }


    const totalSalary = salary - medicalAllowance - providentFund - professionalTax - deductedSalary



    let addSalary = await StaffSalary.create({
        staffId: params.body.staffId,
        totalSalary: totalSalary,
        salary: salary,
        salaryDetails: details,
        startDate: params.body.startDate,
        endDate: params.body.endDate,
        createdById: check.id,
        otherDetails: params.otherDetails
    }).catch((err) => { return { error: err } })

    if (addSalary.error || !addSalary) {
        return { error: { status: 500, message: addSalary.error.message || "addsalary null" } }
    }


    return { data: addSalary }

}

async function getSalary() {
    let salary = await StaffSalary.findAll({ raw: true }).catch(() => { return false })
    if (!salary) {
        return { error: { status: 404, message: "salary not found" } }
    }

    let salaryDetails = JSON.stringify(salary)

    fs.writeFileSync("data.json", salaryDetails, "utf8", function (err) {
        if (err) {
            console.log("error on  stringfy")
            return { error: { status: 403, message: "data is no string" } }
        }
    })

    return { data: "data.json" }

}



module.exports = {
    staffSalary: {
        addSalary,
        getSalary
    }
}