const jwt = require("jsonwebtoken")


let check;

function auth(req, res, next) {
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
    req.id = check.id
    // console.log(check.id)
    next()
}




module.exports = auth