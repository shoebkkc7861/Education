const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class Attendance extends Model { }

Attendance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdById: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rollNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isPresent: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    }

}, {
    tableName: "Attendance",
    modelName: "Attendance",
    updatedAt: false,
    sequelize
})

// Attendance
//     .sync({ force: true })
//     .then(() => { console.log("database connected succses full") })
//     .catch(err => console.log(err))

module.exports = Attendance