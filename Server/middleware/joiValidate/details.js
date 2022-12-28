const joi = require("joi")

function addValidate(req, res, next) {
    let schema = joi.object({
        userId: joi.number().required(),
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        middleName: joi.string(),
        fatherName: joi.string().required(),
        motherName: joi.string().required(),
        language: joi.string().required(),
        mobileNumber: joi.string().required(),
        email: joi.string().required(),
        gender: joi.string().required(),
        maritalStatus: joi.string().required(),
        DOB: joi.date().required(),
        nationality: joi.string().required(),
        religion: joi.string(),
        cast: joi.string()
    })

    let result = schema.validate(req.body, { abortEarly: false });
    if (result.error) {
        let message = []
        for (let errMsg of result.error.details) {
            message.push(errMsg.message)
        }
        return res.status(500).send(message);
    }
    next()
}

module.exports = addValidate