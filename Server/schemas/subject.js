const { sequelize, Sequelize, Model, DataTypes } = require("../config/db")

class Subject extends Model { };

Subject.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subjectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacherId: {
        type: DataTypes.INTEGER
    },
    classId: {
        type: DataTypes.INTEGER
    },
    semesterName: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER
    },
    updatedby: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: "Subject",
    tableName: "Subject",
    sequelize
})

// Subject.sync({ force: true })

module.exports = Subject 