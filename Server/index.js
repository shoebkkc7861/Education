//Liberaries

const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const zip = require("express-zip")


const router = require("./routes/init")
const port = process.env.PORT || 3000


//Middle Wares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'))
app.use("/api", router)





app.listen(port, () => {
    console.log(`server listening at port no ${port}`)
})