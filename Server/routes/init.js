const express = require("express")
const app = express()
// const log = require("../middleware/log")


const user = require("./user")
const role = require("./role")
const permission = require("./permission")
const rolePer = require("./rolePer")
const userRole = require("./userRole")
const staff = require("./staff")

const course = require("./course")
const details = require("./details")
const qualification = require("./qualification")
const Class = require("./class")
const education = require("./education")
const subject = require("./subject")

const Attendance = require('./attendance')
const student = require("./student")
const Attend = require('./attend')
const staffAttendance = require('./staffAttendance')
const staffSalary = require("./staffSalary")
const fees = require("./fees")
const monthlyFees = require("./monthlyFees")


const file = require("./file")
const experience = require("./experience")
const department = require("./department")
const studentAssignment = require("./studentAssignment")
const leave = require("./leave")
const assignment = require("./assignment")
const announce = require("./announce")






app.use("/user", user)
app.use("/permission", permission)
app.use("/role", role)
app.use("/rolePer", rolePer)
app.use("/userRole", userRole)
app.use("/staff", staff)
app.use("/department", department)

app.use("/course", course)
app.use("/details", details)
app.use("/class", Class)
app.use("/qualification", qualification)
app.use("/education", education)
app.use("/subject", subject)

app.use("/attendance", Attendance)
app.use("/student", student)
app.use("/attend", Attend)
app.use("/staffAttendance", staffAttendance)
app.use("/staffSalary", staffSalary)
app.use("/fees", fees)

app.use("/file", file)
app.use("/experience", experience)
app.use("/monthlyFees", monthlyFees)
app.use("/studentAssignment", studentAssignment)
app.use("/leave", leave)
app.use("/assignment", assignment)
app.use("/annonce", announce)


// app.use(log)
module.exports = app