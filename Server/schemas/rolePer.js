const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class rolePer extends Model { }

rolePer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: "rolePer",
    tableName: "rolePermissions",
    sequelize
})

// rolePer.sync()
//     .then(() => { console.log("table rolePermission connected") })
//     .catch((err) => { console.log(err) })


module.exports = rolePer