const { sequelize, DataTypes, Model } = require("../config/db")

class StudentAssignment extends Model { }

StudentAssignment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    assignmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.JSON,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "StudentAssignment",
    tableName: "StudentAssignment"
})

// StudentAssignment
//     .sync({ force: true })
//     .then(() => { console.log("assignment database connected") })
//     .catch((err) => { return console.log(err) })

module.exports = StudentAssignment