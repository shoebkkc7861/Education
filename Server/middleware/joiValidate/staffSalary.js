const joi = require("joi")

function addvalidate(req, res, next) {
    const schema = joi.object({
        staffId: joi.number().required(),
        startDate: joi.date().required(),
        endDate: joi.date().required(),
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



module.exports = {
    validate: {
        addvalidate
    }
}