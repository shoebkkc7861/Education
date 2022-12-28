const joi = require("joi")

function validate(req, res, next) {
    const schema = joi.object({
        courseId: joi.number().required(),
        year: joi.number().required().max(5),
        fees: joi.number().required(),
        maxStudent: joi.number().required(),
        otherDetails: joi.object().required()
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