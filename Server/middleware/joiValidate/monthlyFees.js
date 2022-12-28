const joi = require("joi")

const validate = {}

validate.add = (req, res, next) => {
    let schema = joi.object({
        startDate: joi.date().required(),
        endDate: joi.date().required()
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