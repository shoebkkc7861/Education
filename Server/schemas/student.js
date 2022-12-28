const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class Students extends Model { }

Students.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rollNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdby: {
        type: DataTypes.INTEGER
    },
    updatedby: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "Students",
    tableName: "Students",
    sequelize
})

// Students
//     .sync({ force: true })
//     .then(() => console.log("student database connected"))
//     .catch(err => console.log(err))

module.exports = Students