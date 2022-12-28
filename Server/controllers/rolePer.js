const { rolePer, RolePer } = require("../models/rolePer")

const rolePerObj = {}


rolePerObj.getRolePer = async (req, res) => {
    let { error, data } = await RolePer.getRolePer(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}




rolePerObj.update = async (req, res) => {
    let { data, error } = await rolePer.update(req.body)
    if (error) {
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

module.exports = rolePerObj