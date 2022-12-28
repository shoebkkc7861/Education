const joi = require("joi")

function validate(req, res, next) {
    const schema = joi.object({
        userName: joi.string().min(3).max(15).required(),
        contact: joi.string().min(5).max(16).required(),
        email: joi.string().email().min(12).max(40).trim(true).required(),
        password: joi.string().min(6).max(15).required(),
        confirmPassword: joi.string().min(6).max(15).required()
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