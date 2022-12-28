const Joi = require("joi")

function validate(req, res, next) {
    const schema = joi.object({
        classId: Joi.number().required(),
        question: Joi.string().required(),
        subjectId: Joi.number(),
        description: Joi.string(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        isActive: Joi.boolean(),
        isDeleted: Joi.boolean(),
        createdby: Joi.number(),
        updatedby: Joi.number()
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