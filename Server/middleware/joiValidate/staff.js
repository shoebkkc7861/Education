const joi = require("joi")

function validate(req, res, next) {
    let schema = joi.object({
        userId: joi.number().required(),
        designation: joi.string().required(),
        joinDate: joi.date().required(),
        salary: joi.number().required(),
        employeCode: joi.string().required(),
        otherDetails: joi.object()
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

module.exports = validate