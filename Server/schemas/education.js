const { Squelize, sequelize, Model, DataTypes } = require("../config/db")

class Education extends Model { };

Education.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: false

    },
    institute: {
        type: DataTypes.STRING,

    },
    organisation: {
        type: DataTypes.STRING
    },
    avarageMarks: {
        type: DataTypes.INTEGER
    },
    totalMarks: {
        type: DataTypes.INTEGER
    }

}, {
    modelName: "Education",
    tableName: "Education",
    sequelize
})


// Education.sync({ force: true })

module.exports = Education