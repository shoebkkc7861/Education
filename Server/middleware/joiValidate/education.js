const joi = require("joi")

function validate(req, res, next) {
    let schema = joi.object({
        userId: joi.number().required(),
        // qualification: joi.string().required(),
        // institute: joi.string().required(),
        // organisation: joi.string().required(),
        // avarageMarks: joi.number().required(),
        // totalMarks: joi.number().required(),
        // otherDetails: joi.object()
        rows: joi.array().items(
            joi.object({
                qualification: joi.string().min(2).max(20).required(),
                institute: joi.string().required(),
                organisation: joi.string().max(20).required(),
                avarageMarks: joi.number().required(),
                totalMarks: joi.number().required()
            })
        ).required()
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