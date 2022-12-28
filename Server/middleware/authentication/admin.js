const usersRoles = require("../../schemas/userRole")
const jwt = require("jsonwebtoken")

let check;

async function adminAuth(req, res, next) {
    let token = req.header("x-auth-token")
    if (!token) {
        return res.status(500).send("bad request")
    }

    try {
        check = jwt.verify(token, process.env.KEY)
    } catch (error) {
        check = false
    }

    if (!check) {
        return res.status(401).send("verification failed")
    }

    let userRole = await usersRoles.findOne({ where: { userId: check.id, roleId: 1 } }).catch(() => { return false; })
    let admin = await usersRoles.findOne({ where: { userId: check.id, roleId: 4 } }).catch(() => { return false; })
    if (!userRole && !admin) {
        return res.status(403).send("you are not admin")
    }

    next()
}

module.exports = adminAuth