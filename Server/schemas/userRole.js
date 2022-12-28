const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")


class usersRoles extends Model { }

usersRoles.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    modelName: "usersRoles",
    tableName: "usersRoles",
    sequelize
})


// usersRoles.sync()
//     .then(() => { console.log("table usersRoles connected") })
//     .catch((err) => { console.log(err) })


module.exports = usersRoles
