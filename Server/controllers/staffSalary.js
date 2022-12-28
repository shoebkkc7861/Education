const { staffSalary } = require("../models/staffSalary")
const fs = require("fs")

const staffSalaryObj = {}

staffSalaryObj.addSalary = async (req, res) => {
    const { error, data } = await staffSalary.addSalary(req).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 403
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}


staffSalaryObj.getSalary = async (req, res) => {
    let { error, data } = await staffSalary.getSalary().catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 404
        return res.status(error.status).send(error.message)
    }


    const path = `/projects/Education/${data}`

    return res.download(path, function (err) {
        if (err) {
            console.log(err)
            return res.status(402).send(err)
        }
        console.log(res)
        fs.unlinkSync(path, function (err) {
            if (err) {
                console.log("file not found", err)
            } else {
                console.log("file upload succesfull")
            }
        })
    })


}

module.exports = staffSalaryObj