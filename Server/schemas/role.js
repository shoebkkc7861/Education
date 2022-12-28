const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")


class Roles extends Model { }

Roles.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    modelName: "Roles",
    tableName: "Roles",
    sequelize,
    updatedAt: false
})

// Roles.sync({ force: true })
//     .then(() => { console.log("table role connected") })
//     .catch((err) => { console.log(err) })

module.exports = Roles