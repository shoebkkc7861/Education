const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class Permissions extends Model { }

Permissions.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    }
}, {
    modelName: "Permissions",
    tableName: "Permissions",
    sequelize,
    updatedAt: false
})

// Permissions.sync()
//     .then(() => { console.log("table permission connected") })
//     .catch((err) => { console.log(err) })

module.exports = Permissions