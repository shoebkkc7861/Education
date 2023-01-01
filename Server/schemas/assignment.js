const { sequelize, Model, DataTypes } = require("../config/db")

class Assignment extends Model { }


Assignment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subjectId: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdby: {
        type: DataTypes.INTEGER,
    },
    updatedby: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "Assignment",
    tableName: "Assignment",
    sequelize
})

// Assignment.sync({ force: true })

module.exports = Assignment