const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class StaffAttendance extends Model { }

StaffAttendance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    staffId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isPresent: {
        type: DataTypes.INTEGER,
        defaultValue: true
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    }

}, {
    tableName: "StaffAttendance",
    modelName: "StaffAttendance",
    updatedAt: false,
    sequelize
})

// StaffAttendance.sync()

module.exports = StaffAttendance