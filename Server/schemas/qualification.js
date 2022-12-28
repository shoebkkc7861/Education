const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")


class Qualification extends Model { }

Qualification.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    college: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearOfPassing: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    details: {
        type: DataTypes.JSON
    }
}, {
    modelName: "Qualification",
    tableName: "Qualification",
    sequelize
})

// Qualification.sync()
//     .then(() => { console.log("table Qualification connected successfull") })
//     .catch((err) => { console.log(err) })


module.exports = Qualification