const mailer = require("nodemailer")
require("dotenv").config()

async function emailverify(subject, description, email) {
    const transport = mailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const msg = {
        from: process.env.USER,
        to: email,
        subject: subject,
        text: description
    }
    transport.sendMail(msg, (error, info) => {
        if (error) {
            return error
        } else {
            return ("email sent ")
        }
    })
}


module.exports = emailverify