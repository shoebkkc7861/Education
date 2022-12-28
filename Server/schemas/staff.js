const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")

class Staff extends Model { }

Staff.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    employeCode: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    joinDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    otherDetails: {
        type: DataTypes.JSON,
    }
}, {
    modelName: "Staff",
    tableName: "Staff",
    sequelize
})


// Staff
//     .sync({ force: true })
//     .then(() => { console.log("staff tabale conected") })

module.exports = Staff