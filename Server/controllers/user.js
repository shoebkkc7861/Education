const { Users, user } = require("../models/user")

const userObj = {}

userObj.addUser = async (req, res) => {
    let { error, data } = await user.addUser(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 303
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

userObj.login = async (req, res) => {
    let { error, data } = await user.login(req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 303
        return res.status(error.status).send(error.message)
    }
    return res.header("x-auth-token", data).status(200).json(data)
}

userObj.getUsers = async (req, res) => {
    let { error, data } = await user.getUsers().catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 303
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

userObj.getUser = async (req, res) => {
    let { error, data } = await user.getUser(req).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 302
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

userObj.deleteUser = async (req, res) => {
    let { error, data } = await user.deleteUser(req).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 303
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

userObj.forget = async (req, res) => {
    let { error, data } = await user.forget(req).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 403
        return res.status(error.status).send(error.message)
    }
    return res.status(200).send(data)
}

userObj.verify = async (req, res) => {
    let { error, data } = await user.verify(req.params, req.body).catch((err) => { return { error: err } })
    if (error) {
        error.status = error.status ? error.status : 502
        return res.status(error.status).send(error.message)
    }
    return res.status(201).send(data)
}

module.exports = userObj