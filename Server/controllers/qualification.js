const { Qualification, qualification } = require("../models/qualification")

const qualificationObj = {}

qualificationObj.addQualification = async (req, res) => {
    let { error, data } = await qualification.addQualification(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

qualificationObj.getQualification = async (req, res) => {
    let { error, data } = await qualification.getQualification()
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}



module.exports = qualificationObj