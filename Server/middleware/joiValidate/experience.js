const joi = require("joi")

function validate(param) {
    let schema = joi.object({
        userId: joi.number().required(),
        title: joi.string(),
        EmploymentType: joi.string(),
        companyName: joi.string(),
        Location: joi.string(),
        StartDate: joi.date(),
        EndDate: joi.date(),
        Industry: joi.string(),
        Description: joi.string(),
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