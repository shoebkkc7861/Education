const Users = require("../schemas/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const emailVarify = require("../middleware/mail/mailer")

async function addUser(params = {}) {
    if (params.password != params.confirmPassword) {
        return { error: { status: 500, message: "password and confirm password do not match" } }
    }

    let salt = await bcrypt.genSalt(12)
    params.password = await bcrypt.hash(params.password, salt)
    params.confirmPassword = await bcrypt.hash(params.confirmPassword, salt)
    let user = await Users.create(params).catch((err) => { return { error: err } })
    if (user.error || user == null) {
        return { error: { status: 402, message: user.error.message || "bad request" } }
    }

    const subject = "signup successfull"
    const description = JSON.stringify(user)
    const email = params.email

    emailVarify(subject, description, email)

    return { data: user }
}

async function login(params = {}) {
    let find = await Users.findOne({ where: { email: params.email } }).catch((err) => { return false })
    if (!find) {
        return { error: { status: 404, message: "invalid email" } }
    }
    let check = await bcrypt.compare(params.password, find.password).catch(() => { return false })
    if (!check) {
        return { error: { status: 500, message: "invalid email or password" } }
    }
    let token = jwt.sign({ id: find.id }, process.env.KEY)
    // console.log(token)
    return { data: token }
}

async function getUsers() {
    let user = await Users.findAll({ attributes: ['id', 'userName', 'contact', 'email'] }).catch(() => { return false })
    if (!user) {
        return { error: { status: 404, message: "not found" } }
    }
    return { data: user }
}

async function getUser(params) {

    let token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)

    let user = await Users.findAll({ where: { id: check.id }, attributes: ['id', 'userName', 'contact', 'email'] }).catch((err) => {
        return { error: err };
    })
    if (user.error || !user || user === null) {
        return { error: { status: 403, message: user.error.message || "user not found" } }
    }
    return { data: user }
}


async function deleteUser(params) {


    let user = await Users.findOne({ where: { id: params.body.id } }).catch(() => { return false; })
    if (!user) {
        return { error: { status: 403, message: "please enter your id" } }
    }

    let check;

    let token = params.header("x-auth-token")
    if (!token) {
        return { error: { status: 500, message: "bad request" } }
    }

    try {
        check = jwt.verify(token, process.env.KEY)
    } catch (error) {
        check = false
    }
    if (!check) {
        return { error: { status: 401, message: "verification failed" } }
    }

    params.id = check.id

    if (user.id !== params.id) {
        return { error: { status: 403, message: "enter your correct id" } }
    }

    let deleteUser = await Users.destroy({ where: { id: params.body.id } }).catch((err) => { return { error: err } })
    if (deleteUser.error || !deleteUser) {
        return { error: { status: 402, message: "error in delete" } }
    }

    return { data: "user deleted sussesfull" }

}




async function forget(params) {
    let token;
    token = params.header("x-auth-token")

    const check = jwt.verify(token, process.env.KEY)


    let userData = await Users.findOne({ where: { id: check.id } })
    if (userData === null) {
        return { error: { status: 400, message: "invalid user" } }
    }
    const secret = userData.password
    console.log(userData.email)
    const payload = {
        id: userData.id,
        email: userData.email
    }
    token = jwt.sign(payload, secret, { expiresIn: "20m" })

    const link = `http://localhost:5000/api/user/forget/${userData.id}/${token}`

    let sub = "forget password mail"
    emailVarify(sub, link, userData.email)


    return { data: "email has been sent on your registered gmail account" }
}


async function verify(param1, param2) {

    let userData = await Users.findOne({ where: { id: param1.id } })
    if (userData == null) {
        return { error: { status: 400, message: "invalid user " } }
    }

    if (param1.id != userData.id) {
        return { error: { status: 400, message: "invalid user  " } }
    }
    const secret = userData.password

    const load = jwt.verify(param1.token, secret)

    if (!load) {
        return { error: { status: 400, message: "not verified token" } }
    }

    if (param2.password != param2.confirmPassword) {
        return { error: { status: 502, message: "password and confirmPassword must be a same" } }
    }

    let salt = await bcrypt.genSalt(12)

    param2.password = await bcrypt.hash(param2.password, salt)
    param2.confirmPassword = await bcrypt.hash(param2.confirmPassword, salt)

    let reset = await Users.update(param2, { where: { id: userData.id } })
        .catch((err) => { return { error: err } })

    if (reset.error || !reset || reset === null) {
        return { error: { status: 400, message: reset.error } || "cant update " }
    }
    let sub = "password changed successfull"
    let disc = userData
    emailVarify(sub, disc, userData.email)


    return { data: userData }

}


module.exports = {
    Users,
    user: {
        addUser,
        login,
        getUsers,
        getUser,
        deleteUser,
        forget,
        verify
    }
}