const { Sequelize, DataTypes, Model } = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB, { logging: true })

sequelize
    .authenticate()
    .then(() => { console.log("databases connected successfull") })
    .catch((err) => { console.log(err) })

module.exports = {
    sequelize,
    DataTypes,
    Model,
    Sequelize
}