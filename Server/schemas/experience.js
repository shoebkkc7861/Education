const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")

class Experience extends Model { };

Experience.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    employmentType: {
        type: DataTypes.STRING
    },
    companyName: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    startDate: {
        type: DataTypes.DATEONLY
    },
    endDate: {
        type: DataTypes.DATEONLY
    },
    industry: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    modelName: "Experience",
    tableName: "Experience",
    sequelize
})

// Experience.sync({ force: true })


module.exports = Experience