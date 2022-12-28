const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")

class Users extends Model { }

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    modelName: "Users",
    tableName: "Users",
    sequelize
})


// Users
//     .sync({ force: true })
//     .then(() => { console.log("table connected successfull") })
//     .catch((err) => { console.log(err) })


module.exports = Users